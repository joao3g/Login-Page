import { useAuth } from "../../main"

import { useNavigate } from "react-router-dom"

import { useEventListener } from "usehooks-ts";

export function Home() {

    const auth = useAuth();

    const navigate = useNavigate();

    const handleLogOut = () => {
        auth.signout(() => {
            console.log("Deslogando...")
            navigate("/", {replace: true})
        })
    }

    /* const handleUnload = () => {
        auth.signout()
    }*/

    useEventListener("beforeunload", () => console.log("Saindo da Home"))

    return (
        <div>
            <h1>Welcome {auth.user}!</h1>
            <button onClick={handleLogOut}> Logout </button>
        </div>
    );
}