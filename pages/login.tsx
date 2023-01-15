import React, { useState } from "react";

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

  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-1/2 bg-cyan-700"></div>

      <div className="h-full w-1/2 bg-cyan-300">
        <h1>Happening now</h1>
        <h4>Join Twitter today.</h4>

        <div className="flex flex-col space-y-3">
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

          <button onClick={submitHandler}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
