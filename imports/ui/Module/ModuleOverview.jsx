import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";
import { Modules } from "/imports/db/Modules.js";
import { Quizes } from "/imports/db/Quizes.js";
import { AdminSignUp } from "../AdminSignUp/AdminSignUp.jsx";
import { useHistory } from "react-router";
import ReactPlayer from "react-player";
import "./ModuleOverview.css";

export const ModuleOverview = () => {
  const user = useTracker(() => Meteor.user());
  var userAgeGroup = user.profile.ageGroup;
  const totalScore = user.profile.totalScore;
  const lastAttempt = user.profile.qResults[user.profile.qResults.length - 1];
  console.log(lastAttempt);
  var Module = useTracker(() =>
    Modules.find({ _id: lastAttempt[0], ageGroup: userAgeGroup }).fetch()
  );
  console.log(Module);
  var pass = "";
  if (lastAttempt[2]) {
    pass = "Yes";
  } else {
    pass = "No";
  }
  // go home
  const goHome = () => {
    window.location.assign("/home");
  };
  return (
    <div className="div-holder">
      <div className="module-col">
            <h1 className="overview-header">Time period: {Module[0].timePeriod}</h1>
            <h1 className="overview-header">Module: {Module[0].title}</h1>
        <div className="module-row">
          <div className="module-overview-box">
            <h1 className="module-header">Points Gained</h1>
            <div className="module-col">
              <h2>{lastAttempt[1]}</h2>
            </div>
          </div>
          <div className="module-overview-box">
            <h1 className="module-header">Total User Points</h1>
            <div className="module-col">
              <h2>{totalScore}</h2>
            </div>
          </div>
          <div className="module-overview-box">
            <h1 className="module-header">Did you pass</h1>
            <div className="module-col">
              <h2>{pass}</h2>
            </div>
          </div>
        </div>
        <button class="btn" className="button" onClick={goHome}>
          Go Home
        </button>
      </div>
    </div>
  );
};
