import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { Roles } from 'meteor/alanning:roles';

import "./LoginForm.css";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  this.timer = setTimeout(this.enableMessage, 250);

  // BUTTON ROUTING FUNCTIONS
  // log in

  submit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password, function (err){
      if(!err){
        console.log('Login attempt was successful');
        window.location.assign('http://localhost:3000/home');
      } else {
        console.log(err);
        return;
      }
    });
  };

  // sign up
  const signupForm = () => {
    window.location.assign("/sign-up");
  };

  // HTML
  return (
    <form className="login-form">
      <h2>Welcome to the</h2>
      <h1 id="cmclGradient">Carl Maxey Center for Learning</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="unpw" //UserName and PassWord id for css
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="unpw" //UserName and PassWord id for css
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div id="loginBtn"><button type="submit" className="block" id="login" onClick={submit}>Log In</button></div>
      <div id="loginBtn"><button type="button" className="block" id="signup" onClick={signupForm}>Sign Up</button></div>
    </form>    
  );
};
