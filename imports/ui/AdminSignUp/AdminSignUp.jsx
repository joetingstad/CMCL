import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from "meteor/accounts-base";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './AdminSignUp.css';

export const AdminSignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState(new Date());
  const [ageGroup, setAgeGroup] = useState("");
  const [qCreated, setQComp] = useState(0);
  const [mCreated, setMComp] = useState(0);
  const [tCreated, setTComp] = useState(0);

// BUTTON ROUTING FUNCTIONS
  // sign up
  const handleSubmit = (e) => {
    e.preventDefault();

    if(password != confirm) {alert("Passwords do not match"); return} 
    
    Accounts.createUser({
      username: username,
      password: password,
      email: email,
      profile: {
        isadmin: true, // must be set to true to create Admin
        Fname: firstName,
        Lname: lastName,
        DOB: dob,
        ageGroup: ageGroup,
        qCreated: qCreated,
        mCreated: mCreated,
        tCreated: tCreated,
      }
    },function (err){
      if(err){
        alert(err.reason);
      } else {
        Meteor.loginWithPassword(username, password, function (err){
          if(!err){
            console.log('Login attempt was successful, loading home page');
            window.location.assign('http://localhost:3000/home')
          } else {
            console.log();
          }
        });
      }
    });
    
  };
  // q, m, t created functions
  const quizCreated = () => {
      user.profile.qCreated + 1;
  }

  const moduleCreated = () => {
      user.profile.mCreated + 1;
  }

  const timeperiodCreated = () => {
      user.profile.tCreated + 1;
  }


  // log in
  const backToProfile = () => {
    window.location.assign("/user-page")
  }
  return (
    
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1>Admin Sign Up Info</h1>
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
        <label htmlFor="password">Password</label>

        <input
          type="text"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="confirm">Confirm Password</label>

        <input
          type="text"
          placeholder="Confirm Password"
          name="confirm"
          required
          onChange={(e) => setConfirm(e.target.value)}
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
        <label htmlFor="firstName">First Name</label>

        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="agegroup">Select Age Group: </label>
        <select name="Age Group" onChange={(e) => setAgeGroup(e.target.value)} required defaultValue={'Default'}>
          <option value="Default" disabled selected>Select Age Group...</option>
          <option>Super Heavyweight (Admin)</option>                  
        </select>
      </div>

      <DatePicker selected={dob} onChange={date => setDob(date)} /> 

      <div><button type="submit">Sign Up</button></div>
      <div><button type="button" class="block" id="to-login" onClick={backToProfile}>Back to Profile</button></div>
      
    </form>
  );
};
