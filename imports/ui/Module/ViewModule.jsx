import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";
import { Modules } from "/imports/db/Modules.js";
import { Quizes } from "/imports/db/Quizes.js";
import { AdminSignUp } from "../AdminSignUp/AdminSignUp.jsx";
import { useHistory } from "react-router";
import ReactPlayer from "react-player";
import "./ViewModule.css";

var currID = window.location.href;
currID = currID.replace("http://localhost:3000/", "");
currID = currID.replace("/module", "");

export const ViewModule = () => {
  const history = useHistory();
  const user = useTracker(() => Meteor.user());

  // Hold module data
  var currMod = useTracker(() => Modules.find({ _id: currID }).fetch());

  const [modTitle, setTitle] = useState(currMod[0].title);
  const [modText, setText] = useState(currMod[0].text);
  const [timePeriod, setTimePeriod] = useState(currMod[0].timePeriod);
  const [videoLink, setVideoLink] = useState(currMod[0].videoLink);
  const [ageGroup, setAgeGroup] = useState(currMod[0].ageGroup);

  const toQuiz = () => {
    window.location.assign("/" + currID + "/quiz");
  };

  return (
    <div>
      <div className="module-box">
        <h1 className="module-header">
          {timePeriod} - {modTitle}
        </h1>
        <textarea className="transparent" col="100" rows="25" readOnly>
          {modText}
        </textarea>
        <div className="line" />
        <div className="video-holder">
          <ReactPlayer url={videoLink}></ReactPlayer>
        </div>
      </div>
      <div className="button-holder">
        <button className="button" onClick={toQuiz}>
          Take the Quiz!
        </button>
        <button
            className="button"
            onClick={() => {
              history.goBack();
            }}
          >
            Go Back
          </button>
      </div>
    </div>
  );
};
