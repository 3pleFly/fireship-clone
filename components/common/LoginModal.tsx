"use client";

import React from "react";

export const LoginModal = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

const LoginForm = () => {
  async function send() {
    const res = await fetch("http://localhost:3000/api/sendemail", {
      method: "POST",
    });
  }

  return (
    <>
      <label>
        <button className="bg-white" onClick={send}>send</button>
        <span>With magic email link:</span>
        <input type="text" />
      </label>
    </>
  );
};
