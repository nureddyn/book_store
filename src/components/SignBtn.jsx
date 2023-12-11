import React, { useContext } from "react";
import { LogContext } from "../App";

export default function SignBtn() {
  const [logIn, setLogIn] = useContext(LogContext);

  return (
    <>
      <button className="sign-button">
        Sign Up
      </button>
    </>
  );
}
