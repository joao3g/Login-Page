import React from 'react'
import ReactDOM from 'react-dom/client'

/* Pages */
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { ErrorPage } from './pages/error-page';

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Navigate
} from "react-router-dom";

import { useLocalStorage, useSessionStorage } from "usehooks-ts";

interface AuthContextProps {
  user: string;
  remember: boolean;
  signin: (user: string, remember: boolean, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextProps>(null!);

export function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userSession, setUserSession] = useSessionStorage('user', "");
  const [userLocal, setUserLocal] = useLocalStorage('user', "");

  const user = userSession == "" ? userLocal : userSession;

  var rememberMe = false;

  const signin = (newUser: string, remember: boolean, callback: VoidFunction) => {
    remember ? setUserLocal(newUser) : setUserSession(newUser);
    rememberMe = remember;
    callback();
  };

  const signout = (callback: VoidFunction) => {
    setUserSession("");
    setUserLocal("");
    callback();
  }; 

  const value = { user, remember: rememberMe, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  console.log("Cookies user:", auth)

  if (auth.user == "") {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: (
      <AuthProvider>
        <RequireAuth>
          <Home />
        </RequireAuth>
      </AuthProvider>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
