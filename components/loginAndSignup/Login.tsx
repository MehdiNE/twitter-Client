import { Divider } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function changeUsernameHandler(e: any) {
    setUsername(e.target.value);
  }

  function changePasswordHandler(e: any) {
    setPassword(e.target.value);
  }

  function submitHandler() {}

  function loginWithGoogleHandler() {}

  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-1/2 bg-cyan-700"></div>

      <div className="h-full w-1/2 bg-slate-100">
        <h1>Happening now</h1>
        <h4>Join Twitter today.</h4>

        <button onClick={loginWithGoogleHandler}>login with google</button>

        <Divider>OR</Divider>

        <div className="flex flex-col items-center justify-center space-y-3">
          <input
            value={username}
            onChange={changeUsernameHandler}
            placeholder="username or email"
          />
          <input
            value={password}
            onChange={changePasswordHandler}
            placeholder="password"
          />

          <ForgotPassword />

          <button
            onClick={submitHandler}
            className="inline-block w-64 rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            Login
          </button>
          <div className="text-xs">
            Don&apos;t have an account?{" "}
            <Link href={"/signup"} className="font-medium text-cyan-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
