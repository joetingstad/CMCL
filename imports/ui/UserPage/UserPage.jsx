import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from 'react';
import { HomeForm } from "../HomeForm/HomeForm.jsx";
import { SignUp } from "../SignUp/SignUp.jsx";
import { BrowserRouter as Router, Route, Link, browserHistory} from "react-router-dom";
import { createBrowserHistory } from "history";
import './UserPage.css';
import './UserPage.scss';
import { Mongo } from 'meteor/mongo';



export const UserPage = () => {
    const user = useTracker(() => Meteor.user());
    
// BUTTON ROUTING FUNCTIONS
    // log out     
    const logout = () => {
        
        Meteor.logout(function (err){
            if(!err){
              console.log('Logout attempt was successful navigating to login screen');
              window.location.assign('http://localhost:3000/login');
            } else {
              console.log(err);
            }
        });
    };

    // go home
    const goHome = () => {
        window.location.assign("/home")
    }

    // to sign up page
    const addAdmin = () => {
        window.location.assign("/admin-sign-up")
    }

    // 
    const history = createBrowserHistory();
    return( 
        <div class="frame">
        <div class="center">
          
              <div class="profile">
               
                  <h2><u>Profile</u></h2>
                  <div class="name">{user && <>{user.username}</>}</div>
                  <div class="job">{user && <>{user.profile.Fname}</>} {user && <>{user.profile.Lname}</>}</div>
                  <div class="age">{user && <>{user.profile.ageGroup}</>}</div>
                  {user.profile.isadmin ? ( <>
                        <div></div>
                      </>):( <>
                        <div class="age">Total Score: {user && <>{user.profile.totalScore}</>} </div>
                      </>)}
                  
                  <div class="actions">
                      <button class="btn" onClick={goHome}>Go Home</button>
                      <button class="btn" onClick={logout}>Log Out</button>
                      {user.profile.isadmin ? ( <>
                          <button class="btn" onClick={addAdmin}>Create Admin</button>
                      </>):( <>
                        <h4></h4>
                      </>)}
                  </div>
              </div>
              
              <div class="stats">
                  <div class="box" id="quiz">
                        {user.profile.isadmin ? ( <>
                            <span class="value">{user && <>{user.profile.qCreated}</>}</span>
                            <span class="parameter">Quizes Created</span>
                        </>):( <>
                            <span class="value">{user && <>{user.profile.qComp}</>}</span>
                            <span class="parameter">Quizes Completed</span>
                        </>)}
                  </div>
                  <div class="box" id="module">
                        {user.profile.isadmin ? ( <>
                            <span class="value">{user && <>{user.profile.mCreated}</>}</span>
                            <span class="parameter">Modules Created</span>
                        </>):( <>
                            <span class="value">{user && <>{user.profile.mComp}</>}</span>
                            <span class="parameter">Modules Completed</span>
                        </>)}
                  </div>
                  <div class="box" id="timePeriods">
                        {user.profile.isadmin ? ( <>
                            <span class="value">{user && <>{user.profile.tCreated}</>}</span>
                            <span class="parameter">Time Periods Created</span>
                        </>):( <>
                            <span class="value">{user && <>{user.profile.tComp}</>}</span>
                            <span class="parameter">Time Periods Completed</span>
                        </>)}
                  </div>
              </div>
      </div>
      </div>
        
    );

};