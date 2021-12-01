import React, { FormEvent } from "react";
import { cleanObject } from "../utils";
export const Login = () => {
  const login = (username: string, password: string) => {
    const param = {
      username,
      password,
    };
    fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (res) => {
      if (res.ok) {
        await console.log(res);
      }
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login(username, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id="username"></input>
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" id="password"></input>
        </div>
      </div>
      <button type="submit">login</button>
    </form>
  );
};
