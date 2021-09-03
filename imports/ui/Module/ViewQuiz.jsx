import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from 'react';
import { Modules } from "/imports/db/Modules.js";
import { Quizes } from "/imports/db/Quizes.js";
import { AdminSignUp } from "../AdminSignUp/AdminSignUp.jsx";
import { useHistory } from "react-router";
import ReactPlayer from 'react-player'
import "./ViewQuiz.css";


var currID = window.location.href;
currID = currID.replace("http://localhost:3000/", "");
currID = currID.replace("/quiz", "");

export const ViewQuiz = () => {
    const history = useHistory()
    const user = useTracker(() => Meteor.user());
    // Hold module data
    var currMod = useTracker( () => Modules.find( {"_id": currID}).fetch() );

    const [title, setTitle] = useState(currMod[0].title);
    const [text, setText] = useState(currMod[0].text);
    const [timePeriod, setTimePeriod] = useState(currMod[0].timePeriod);
    const [videoLink, setVideoLink] = useState(currMod[0].videoLink);
    const [ageGroup, setAgeGroup] = useState(currMod[0].ageGroup);

    // Hold quiz options and answers
    const [Q1AnsList, setQ1AnsList] = useState(currMod[0].Q1Ans);
    const [Q2AnsList, setQ2AnsList] = useState(currMod[0].Q2Ans);
    const [Q3AnsList, setQ3AnsList] = useState(currMod[0].Q3Ans);
    const [Q4AnsList, setQ4AnsList] = useState(currMod[0].Q4Ans);
    const [Q5AnsList, setQ5AnsList] = useState(currMod[0].Q5Ans);
    const [Q1OptList, setQ1OptList] = useState(currMod[0].Q1OptionArray);
    const [Q2OptList, setQ2OptList] = useState(currMod[0].Q2OptionArray);
    const [Q3OptList, setQ3OptList] = useState(currMod[0].Q3OptionArray);
    const [Q4OptList, setQ4OptList] = useState(currMod[0].Q4OptionArray);
    const [Q5OptList, setQ5OptList] = useState(currMod[0].Q5OptionArray);

    // Hold quiz data
    // Quiz questions
    const [Q1, setQ1] = useState(currMod[0].Q1);
    const [Q2, setQ2] = useState(currMod[0].Q2);
    const [Q3, setQ3] = useState(currMod[0].Q3);
    const [Q4, setQ4] = useState(currMod[0].Q4);
    const [Q5, setQ5] = useState(currMod[0].Q5);

    // Quiz options
    const [Q1Opt1, setQ1Opt1] = useState(Q1OptList[0]);
    const [Q1Opt2, setQ1Opt2] = useState(Q1OptList[1]);
    const [Q1Opt3, setQ1Opt3] = useState(Q1OptList[2]);
    const [Q1Opt4, setQ1Opt4] = useState(Q1OptList[3]);

    const [Q2Opt1, setQ2Opt1] = useState(Q2OptList[0]);
    const [Q2Opt2, setQ2Opt2] = useState(Q2OptList[1]);
    const [Q2Opt3, setQ2Opt3] = useState(Q2OptList[2]);
    const [Q2Opt4, setQ2Opt4] = useState(Q2OptList[3]);

    const [Q3Opt1, setQ3Opt1] = useState(Q3OptList[0]);
    const [Q3Opt2, setQ3Opt2] = useState(Q3OptList[1]);
    const [Q3Opt3, setQ3Opt3] = useState(Q3OptList[2]);
    const [Q3Opt4, setQ3Opt4] = useState(Q3OptList[3]);

    const [Q4Opt1, setQ4Opt1] = useState(Q4OptList[0]);
    const [Q4Opt2, setQ4Opt2] = useState(Q4OptList[1]);
    const [Q4Opt3, setQ4Opt3] = useState(Q4OptList[2]);
    const [Q4Opt4, setQ4Opt4] = useState(Q4OptList[3]);

    const [Q5Opt1, setQ5Opt1] = useState(Q5OptList[0]);
    const [Q5Opt2, setQ5Opt2] = useState(Q5OptList[1]);
    const [Q5Opt3, setQ5Opt3] = useState(Q5OptList[2]);
    const [Q5Opt4, setQ5Opt4] = useState(Q5OptList[3]);


    // Quiz answers
    const [Q1Ans1, setQ1Ans1] = useState(Q1AnsList[0]);
    const [Q1Ans2, setQ1Ans2] = useState(Q1AnsList[1]);
    const [Q1Ans3, setQ1Ans3] = useState(Q1AnsList[2]);
    const [Q1Ans4, setQ1Ans4] = useState(Q1AnsList[3]);

    const [Q2Ans1, setQ2Ans1] = useState(Q2AnsList[0]);
    const [Q2Ans2, setQ2Ans2] = useState(Q2AnsList[1]);
    const [Q2Ans3, setQ2Ans3] = useState(Q2AnsList[2]);
    const [Q2Ans4, setQ2Ans4] = useState(Q2AnsList[3]);

    const [Q3Ans1, setQ3Ans1] = useState(Q3AnsList[0]);
    const [Q3Ans2, setQ3Ans2] = useState(Q3AnsList[1]);
    const [Q3Ans3, setQ3Ans3] = useState(Q3AnsList[2]);
    const [Q3Ans4, setQ3Ans4] = useState(Q3AnsList[3]);

    const [Q4Ans1, setQ4Ans1] = useState(Q4AnsList[0]);
    const [Q4Ans2, setQ4Ans2] = useState(Q4AnsList[1]);
    const [Q4Ans3, setQ4Ans3] = useState(Q4AnsList[2]);
    const [Q4Ans4, setQ4Ans4] = useState(Q4AnsList[3]);
    
    const [Q5Ans1, setQ5Ans1] = useState(Q5AnsList[0]);
    const [Q5Ans2, setQ5Ans2] = useState(Q5AnsList[1]);
    const [Q5Ans3, setQ5Ans3] = useState(Q5AnsList[2]);
    const [Q5Ans4, setQ5Ans4] = useState(Q5AnsList[3]);

    const checkAnswers = () => {
        var Q1Correct = false;
        var Q2Correct = false;
        var Q3Correct = false;
        var Q4Correct = false;
        var Q5Correct = false;

        // Check user answers against answers stored in DB

        // Question 1
        if (document.getElementById("Q1Opt1").checked && Q1Ans1 == "on") {
            Q1Correct = true;
        }
        else if (document.getElementById("Q1Opt2").checked && Q1Ans2 == "on") {
            Q1Correct = true;
        }
        else if (document.getElementById("Q1Opt3").checked && Q1Ans3 == "on") {
            Q1Correct = true;
        }
        else if (document.getElementById("Q1Opt4").checked && Q1Ans4 == "on") {
            Q1Correct = true;
        }
        else {
            Q1Correct = false;
        }

        // Question 2
        if (document.getElementById("Q2Opt1").checked && Q2Ans1 == "on") {
            Q2Correct = true;
        }
        else if (document.getElementById("Q2Opt2").checked && Q2Ans2 == "on") {
            Q2Correct = true;
        }
        else if (document.getElementById("Q2Opt3").checked && Q2Ans3 == "on") {
            Q2Correct = true;
        }
        else if (document.getElementById("Q2Opt4").checked && Q2Ans4 == "on") {
            Q2Correct = true;
        }
        else {
            Q2Correct = false;
        }

        // Question 3
        if (document.getElementById("Q3Opt1").checked && Q3Ans1 == "on") {
            Q3Correct = true;
        }
        else if (document.getElementById("Q3Opt2").checked && Q3Ans2 == "on") {
            Q3Correct = true;
        }
        else if (document.getElementById("Q3Opt3").checked && Q3Ans3 == "on") {
            Q3Correct = true;
        }
        else if (document.getElementById("Q3Opt4").checked && Q3Ans4 == "on") {
            Q3Correct = true;
        }
        else {
            Q3Correct = false;
        }

        // Question 4
        if (document.getElementById("Q4Opt1").checked && Q4Ans1 == "on") {
            Q4Correct = true;
        }
        else if (document.getElementById("Q4Opt2").checked && Q4Ans2 == "on") {
            Q4Correct = true;
        }
        else if (document.getElementById("Q4Opt3").checked && Q4Ans3 == "on") {
            Q4Correct = true;
        }
        else if (document.getElementById("Q4Opt4").checked && Q4Ans4 == "on") {
            Q4Correct = true;
        }
        else {
            Q4Correct = false;
        }

        // Question 5
        if (document.getElementById("Q5Opt1").checked && Q5Ans1 == "on") {
            Q5Correct = true;
        }
        else if (document.getElementById("Q5Opt2").checked && Q5Ans2 == "on") {
            Q5Correct = true;
        }
        else if (document.getElementById("Q5Opt3").checked && Q5Ans3 == "on") {
            Q5Correct = true;
        }
        else if (document.getElementById("Q5Opt4").checked && Q5Ans4 == "on") {
            Q5Correct = true;
        }
        else {
            Q5Correct = false;
        }

        // Accumulate user points based on which answers they got correct
        var points = 0;
        if (Q1Correct) {
            points += 5;
        }
        if (Q2Correct) {
            points += 5;
        }
        if (Q3Correct) {
            points += 5;
        }
        if (Q4Correct) {
            points += 5;
        }
        if (Q5Correct) {
            points += 5;
        }

        // Determine whether a user passed the quiz or not (4/5 = passing)
        var passed = false;
        if (points >= 20) {
            passed = true;
            points += 10;
        }      
        console.log(user.profile.totalScore)
        // Set up a performance array that holds the user's stats for the last quiz to be pushed to db
        var performanceArray = [currID, points, passed];
        
        array = user.profile.qResults
        array.push(performanceArray)
        user.profile.qResults = array
        user.profile.totalScore += points;
        if(passed){
            user.profile.mComp += 1; 
        }
        user.profile.qComp += 1; 
        var q = user.profile;
        
        
        Meteor.call("user.update", user._id, {profile: q});
        
        console.log("Total points: ", points);
        console.log("Passed: ", passed);

        window.location.assign("/" + currID + "/overview");
    }

    return(
        <div>
        <div className="module-box">
        <h1 className="module-header">{timePeriod} - {title} Quiz</h1>
        
        <div>
          <h3 htmlFor="Q1">Question 1</h3>
          <label>{Q1}</label>
          <div>
          <input type="radio" name="Q1Opt" id="Q1Opt1"></input>
          <label>{Q1Opt1}</label><br/>
          <input type="radio" name="Q1Opt" id="Q1Opt2"></input>
          <label>{Q1Opt2}</label><br/>
          <input type="radio" name="Q1Opt" id="Q1Opt3"></input>
          <label>{Q1Opt3}</label><br/>
          <input type="radio" name="Q1Opt" id="Q1Opt4"></input>
          <label>{Q1Opt4}</label><br/>
          </div>
        </div>
        <div className="line"/>
        <div>
          <h3 htmlFor="Q2">Question 2</h3>
          <label>{Q2}</label>
          <div>
          <input type="radio" name="Q2Opt" id="Q2Opt1"></input>
          <label>{Q2Opt1}</label><br/>
          <input type="radio" name="Q2Opt" id="Q2Opt2"></input>
          <label>{Q2Opt2}</label><br/>
          <input type="radio" name="Q2Opt" id="Q2Opt3"></input>
          <label>{Q2Opt3}</label><br/>
          <input type="radio" name="Q2Opt" id="Q2Opt4"></input>
          <label>{Q2Opt4}</label><br/>
          </div>
        </div>
        <div className="line"/>
        <div>
          <h3 htmlFor="Q3">Question 3</h3>
          <label >{Q3}</label>
          <div>
          <input type="radio" name="Q3Opt" id="Q3Opt1"></input>
          <label>{Q3Opt1}</label><br/>
          <input type="radio" name="Q3Opt" id="Q3Opt2"></input>
          <label>{Q3Opt2}</label><br/>
          <input type="radio" name="Q3Opt" id="Q3Opt3"></input>
          <label>{Q3Opt3}</label><br/>
          <input type="radio" name="Q3Opt" id="Q3Opt4"></input>
          <label>{Q3Opt4}</label><br/>
          </div>
        </div>
        <div className="line"/>
        <div>
          <h3 htmlFor="Q4">Question 4</h3>
          <label>{Q4}</label>
          <div>
          <input type="radio" name="Q4Opt" id="Q4Opt1"></input>
          <label>{Q4Opt1}</label><br/>
          <input type="radio" name="Q4Opt" id="Q4Opt2"></input>
          <label>{Q4Opt2}</label><br/>
          <input type="radio" name="Q4Opt" id="Q4Opt3"></input>
          <label>{Q4Opt3}</label><br/>
          <input type="radio" name="Q4Opt" id="Q4Opt4"></input>
          <label>{Q4Opt4}</label><br/>
          </div>
        </div>
        <div className="line"/>
        <div>
          <h3 htmlFor="Q5">Question 5</h3>
          <label>{Q5}</label>
          <div>
          <input type="radio" name="Q5Opt" id="Q5Opt1"></input>
          <label>{Q5Opt1}</label><br/>
          <input type="radio" name="Q5Opt" id="Q5Opt2"></input>
          <label>{Q5Opt2}</label><br/>
          <input type="radio" name="Q5Opt" id="Q5Opt3"></input>
          <label>{Q5Opt3}</label><br/>
          <input type="radio" name="Q5Opt" id="Q5Opt4"></input>
          <label>{Q5Opt4}</label><br/>
          </div>
        </div>

        <div className="line"/>

        <button className="button" onClick={checkAnswers}>Submit Quiz</button>
        <button className="button" onClick={() => history.goBack()}>Cancel</button>
        </div>
        </div>
    )
}