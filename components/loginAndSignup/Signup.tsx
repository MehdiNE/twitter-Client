import Divider from "@mui/material/Divider";
import Link from "next/link";
import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function changeUsernameHandler(e: any) {
    setUsername(e.target.password);
  }

  function changeEmailHandler(e: any) {
    setEmail(e.target.value);
  }

  function changePasswordHandler(e: any) {
    setPassword(e.target.value);
  }

  function submitHandler() {}

  function signupWithGoogleHandler() {}

  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-1/2 bg-gray-600"></div>
      <div className="h-full w-1/2 bg-gray-100">
        <h1>Happening now</h1>
        <h4>Join Twitter today</h4>

        <button onClick={signupWithGoogleHandler} className="border">
          sign up with google
        </button>

        <Divider>OR</Divider>

        <div>
          <input
            value={username}
            onChange={changeUsernameHandler}
            type="text"
            placeholder="username"
          />
          <input
            value={email}
            onChange={changeEmailHandler}
            type="email"
            placeholder="email"
          />
          <input
            value={password}
            onChange={changePasswordHandler}
            type="password"
            placeholder="password"
          />
        </div>

        <button
          onClick={submitHandler}
          className="inline-block w-64 rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        >
          Sign up
        </button>

        <div className="text-xs">
          Have an account already?{" "}
          <Link href={"/login"} className="font-medium text-cyan-500">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
