import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";
import "./PasswordReset.css";

export const PasswordReset = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Accounts.sendResetPasswordEmail(username, email);
  };

  return (
    <form className="passwordreset-form" onSubmit={handleSubmit}>
      <h1>Reset Password</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <button type="submit">Reset Password</button>
      </div>
      <div>
        <a href="login">Login</a>
      </div>
    </form>
  );
};
