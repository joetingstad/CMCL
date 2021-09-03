import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./SignUp.css";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [qScore, setQScore] = useState(0);
  const [mScore, setMScore] = useState(0);
  const [tScore, setTScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [qComp, setQComp] = useState(0);
  const [mComp, setMComp] = useState(0);
  const [tComp, setTComp] = useState(0);

  // BUTTON ROUTING FUNCTIONS
  // sign up
  const handleSubmit = (e) => {
    e.preventDefault();

    var specChar = false;
    var lenReq = false;
    var noSpace = false;
    var matching = false;
    var emailValid = false;

    // Ensure that the user has entered valid password
    if (password != confirm) {
      alert("Passwords do not match");
    } else {
      matching = true;
    }
    if (password.length < 8) {
      alert("Password must contain at least 8 characters");
    } else {
      lenReq = true;
    }
    if (
      !password.includes("!") &&
      !password.includes("@") &&
      !password.includes("#") &&
      !password.includes("$") &&
      !password.includes("%") &&
      !password.includes("^") &&
      !password.includes("*") &&
      !password.includes(",") &&
      !password.includes(".") &&
      !password.includes("+") &&
      !password.includes("-")
    ) {
      alert(
        "Password must contain one of the following special characters: ! @ # $ % ^ * , . + -"
      );
    } else {
      specChar = true;
    }
    if (password.includes(" ")) {
      alert("Password must not contain any spaces");
    } else {
      noSpace = true;
    }

    // Ensure that the user has entered valid email
    if (email.includes("@")) {
      // Email includes @, check for .
      emailAfterAt = email.substring(email.indexOf("@") + 1);

      // If email includes a . after the @, count as valid
      if (emailAfterAt.includes(".")) {
        emailValid = true;
      } else {
        alert("Please enter a valid email");
      }
    } else {
      alert("Please enter a valid email");
    }

    if (emailValid && specChar && lenReq && noSpace && matching) {
      // All inputs are valid
      Accounts.createUser(
        {
          username: username,
          password: password,
          email: email,
          profile: {
            isadmin: false, //must be false in this page
            Fname: firstName,
            Lname: lastName,
            ageGroup: ageGroup,
            qScore: qScore,
            mScore: mScore,
            tScore: tScore,
            totalScore: qScore + mScore + tScore,
            qComp: qComp,
            mComp: mComp,
            tComp: tComp,
            qResults: [],
          },
        },
        function (err) {
          if (err) {
            alert(err.reason);
          } else {
            Meteor.loginWithPassword(username, password, function (err) {
              if (!err) {
                console.log("Login attempt was successful, loading home page");
                window.location.assign("http://localhost:3000/home");
              } else {
                console.log();
              }
            });
          }
        }
      );
    }
  };

  // log in
  const backToLoginForm = () => {
    window.location.assign("/login");
  };

  // Score functions
  const quizComplete = () => {
    user.profile.qScore + 10;
  };

  const moduleComplete = () => {
    user.profile.mScore + 20;
  };

  const timelineComplete = () => {
    user.profile.tScore + 50;
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form-box">
      <div className="signup-header-box">
      <h1 className="signup-header">Sign Up</h1>
      </div>
      <div className="signup-row">
        <div>
          <label htmlFor="firstName" className="signup-label">First Name</label>

          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="signup-input"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="signup-label">Last Name</label>

          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="signup-input"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="username" className="signup-label">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="signup-input"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email" className="signup-label">Email</label>

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="signup-input"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password" className="signup-label">Password</label>

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="signup-input"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="confirm" className="signup-label">Confirm Password</label>

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm"
          className="signup-input"
          required
          onChange={(e) => setConfirm(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="agegroup" className="signup-label">Select Age Group: </label>
        <select
          name="Age Group"
          onChange={(e) => setAgeGroup(e.target.value)}
          required
          defaultValue={"Default"}
          className="agegroup-select"
        >
          <option value="Default" disabled selected>
            Select Age Group...
          </option>
          <option>Flyweight (K-3rd)</option>
          <option>Lightweight (4th-6th)</option>
          <option>Welterweight (7th-9th)</option>
          <option>Heavyweight (10th-12th)</option>
        </select>
      </div>

      <div className="center-button">
        <button type="submit" className="signup-button">Sign Up</button>
      </div>
      <div className="center-button">
        <button
          type="button"
          class="block"
          id="to-login"
          className="signup-button"
          onClick={backToLoginForm}
        >
          Back
        </button>
        </div>
      </div>
    </form>
  );
};
