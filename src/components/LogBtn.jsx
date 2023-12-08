import { useContext } from "react";
import { LogContext } from "../App";

export default function LogBtn() {
  const [logIn, setLogIn] = useContext(LogContext);

  return (
    <>
      <button className="sign-button" onClick={() => {setLogIn(!logIn)}}>
        {logIn ? "Log Out" : "Log In"}
      </button>
    </>
  )
}
