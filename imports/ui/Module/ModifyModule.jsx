import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from 'react';
import { Modules } from "/imports/db/Modules.js";
import { useHistory } from "react-router";
import ReactPlayer from 'react-player';
import './ModifyModule.css';


var currID = window.location.href;
currID = currID.replace("http://localhost:3000/", "");

export const ModifyModule = () => {
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

    const modify = (e) => {
        e.preventDefault();

        var Q1OptionArray = [Q1Opt1, Q1Opt2, Q1Opt3, Q1Opt4];
        var Q2OptionArray = [Q2Opt1, Q2Opt2, Q2Opt3, Q2Opt4];
        var Q3OptionArray = [Q3Opt1, Q3Opt2, Q3Opt3, Q3Opt4];
        var Q4OptionArray = [Q4Opt1, Q4Opt2, Q4Opt3, Q4Opt4];
        var Q5OptionArray = [Q5Opt1, Q5Opt2, Q5Opt3, Q5Opt4];

        var Q1AnsArray = [Q1Ans1, Q1Ans2, Q1Ans3, Q1Ans4];
        var Q2AnsArray = [Q2Ans1, Q2Ans2, Q2Ans3, Q2Ans4];
        var Q3AnsArray = [Q3Ans1, Q3Ans2, Q3Ans3, Q3Ans4];
        var Q4AnsArray = [Q4Ans1, Q4Ans2, Q4Ans3, Q4Ans4];
        var Q5AnsArray = [Q5Ans1, Q5Ans2, Q5Ans3, Q5Ans4];

        Meteor.call('modules.modify', currID, title, text, timePeriod, videoLink, ageGroup, Q1, Q2, Q3, Q4, Q5, Q1OptionArray, Q2OptionArray, Q3OptionArray, Q4OptionArray, Q5OptionArray, Q1AnsArray, Q2AnsArray, Q3AnsArray, Q4AnsArray, Q5AnsArray, function(error){
            if(error){
                console.log(error);
                alert('Could not update the module.')
            }else{
                alert('Module updated successfully.');
                history.goBack();
            }
        })
    }

    return(
        <div>
          {user && user.profile.isadmin ? (
            <>
        <form onSubmit={modify}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>

            <div>
                <label htmlFor="text">Text</label>
                <textarea
                    type="text"
                    placeholder="Text"
                    name="text"
                    required
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
            </div>

            <div>
                <label htmlFor="timePeriod">Choose a Time Period: </label>
                <select name="Time Period" onChange={(e) => setTimePeriod(e.target.value)} required defaultValue={'Default'}>
                    <option value="Default" disabled selected>{timePeriod}</option>
                    <option>Origins of the Slave Trade</option>
                    <option>Civil War</option>
                    <option>Reconstruction Era</option>
                    <option>Rise of the KKK</option>
                    <option>World War II</option>
                    <option>Civil Rights</option>
                    <option>Post Civil Rights</option>
                    <option>Modern Era</option>                    
                </select>
            </div>

            <div>
                <label htmlFor="ageGroup">Choose an Age Group: </label>
                <select name="ageGroupSelect" onChange={(e) => setAgeGroup(e.target.value)} required defaultValue={'Default'}>
                    <option value="Default" disabled selected>{ageGroup}</option>
                    <option>Flyweight (K-3rd)</option>
                    <option>Lightweight (4th-6th)</option>
                    <option>Welterweight (7th-9th)</option>
                    <option>Heavyweight (10th-12th)</option> 
                </select>
            </div>

            <div>
                <label htmlFor="videoLink">Video Link</label>
                <input
                    type="text"
                    placeholder="Video Link"
                    name="videoLink"
                    onChange={(e) => setVideoLink(e.target.value)}
                    value={videoLink}
                />
            </div>

            <h1>Quiz</h1>
        
        <div>
          <h3 htmlFor="Q1">Question 1</h3>
          <input 
            type="text"
            placeholder="Question 1"
            name="Q1"
            value={Q1}
            onChange={(e) => setQ1(e.target.value)}
          /><br/>
          <div>
          <input type="radio" name="Q1Opt" id="Q1Opt1" onChange={(e) => setQ1Ans1(e.target.value)}></input>
          <input type="text" name="Q1Opt1txt" value={Q1Opt1} placeholder="Option 1" onChange={(e) => setQ1Opt1(e.target.value)}></input><br/>
          <input type="radio" name="Q1Opt" id="Q1Opt2" onChange={(e) => setQ1Ans2(e.target.value)}></input>
          <input type="text" name="Q1Opt2txt" value={Q1Opt2} placeholder="Option 2" onChange={(e) => setQ1Opt2(e.target.value)}></input><br/>
          <input type="radio" name="Q1Opt" id="Q1Opt3" onChange={(e) => setQ1Ans3(e.target.value)}></input>
          <input type="text" name="Q1Opt3txt" value={Q1Opt3} placeholder="Option 3" onChange={(e) => setQ1Opt3(e.target.value)}></input><br/>
          <input type="radio" name="Q1Opt" id="Q1Opt4" onChange={(e) => setQ1Ans4(e.target.value)}></input>
          <input type="text" name="Q1Opt4txt" value={Q1Opt4} placeholder="Option 4" onChange={(e) => setQ1Opt4(e.target.value)}></input><br/>
          </div>
        </div>

        <div>
          <h3 htmlFor="Q2">Question 2</h3>
          <input 
            type="text"
            placeholder="Question 2"
            name="Q2"
            value={Q2}
            onChange={(e) => setQ2(e.target.value)}
          /><br/>
          <div>
          <input type="radio" name="Q2Opt" id="Q2Opt1" onChange={(e) => setQ2Ans1(e.target.value)}></input>
          <input type="text" name="Q2Opt1txt" value={Q2Opt1} placeholder="Option 1" onChange={(e) => setQ2Opt1(e.target.value)}></input><br/>
          <input type="radio" name="Q2Opt" id="Q2Opt2" onChange={(e) => setQ2Ans2(e.target.value)}></input>
          <input type="text" name="Q2Opt2txt" value={Q2Opt2} placeholder="Option 2" onChange={(e) => setQ2Opt2(e.target.value)}></input><br/>
          <input type="radio" name="Q2Opt" id="Q2Opt3" onChange={(e) => setQ2Ans3(e.target.value)}></input>
          <input type="text" name="Q2Opt3txt" value={Q2Opt3} placeholder="Option 3" onChange={(e) => setQ2Opt3(e.target.value)}></input><br/>
          <input type="radio" name="Q2Opt" id="Q2Opt4" onChange={(e) => setQ2Ans4(e.target.value)}></input>
          <input type="text" name="Q2Opt4txt" value={Q2Opt4} placeholder="Option 4" onChange={(e) => setQ2Opt4(e.target.value)}></input><br/>
          </div>
        </div>

        <div>
          <h3 htmlFor="Q3">Question 3</h3>
          <input 
            type="text"
            placeholder="Question 3"
            name="Q3"
            value={Q3}
            onChange={(e) => setQ3(e.target.value)}
          /><br/>
          <div>
          <input type="radio" name="Q3Opt" id="Q3Opt1" onChange={(e) => setQ3Ans1(e.target.value)}></input>
          <input type="text" name="Q3Opt1txt" value={Q3Opt1} placeholder="Option 1" onChange={(e) => setQ3Opt1(e.target.value)}></input><br/>
          <input type="radio" name="Q3Opt" id="Q3Opt2" onChange={(e) => setQ3Ans2(e.target.value)}></input>
          <input type="text" name="Q3Opt2txt" value={Q3Opt2} placeholder="Option 2" onChange={(e) => setQ3Opt2(e.target.value)}></input><br/>
          <input type="radio" name="Q3Opt" id="Q3Opt3" onChange={(e) => setQ3Ans3(e.target.value)}></input>
          <input type="text" name="Q3Opt3txt" value={Q3Opt3} placeholder="Option 3" onChange={(e) => setQ3Opt3(e.target.value)}></input><br/>
          <input type="radio" name="Q3Opt" id="Q3Opt4" onChange={(e) => setQ3Ans4(e.target.value)}></input>
          <input type="text" name="Q3Opt4txt" value={Q3Opt4} placeholder="Option 4" onChange={(e) => setQ3Opt4(e.target.value)}></input><br/>
          </div>
        </div>

        <div>
          <h3 htmlFor="Q4">Question 4</h3>
          <input 
            type="text"
            placeholder="Question 4"
            name="Q4"
            value={Q4}
            onChange={(e) => setQ4(e.target.value)}
          /><br/>
          <div>
          <input type="radio" name="Q4Opt" id="Q4Opt1" onChange={(e) => setQ4Ans1(e.target.value)}></input>
          <input type="text" name="Q4Opt1txt" value={Q4Opt1} placeholder="Option 1" onChange={(e) => setQ4Opt1(e.target.value)}></input><br/>
          <input type="radio" name="Q4Opt" id="Q4Opt2" onChange={(e) => setQ4Ans2(e.target.value)}></input>
          <input type="text" name="Q4Opt2txt" value={Q4Opt2} placeholder="Option 2" onChange={(e) => setQ4Opt2(e.target.value)}></input><br/>
          <input type="radio" name="Q4Opt" id="Q4Opt3" onChange={(e) => setQ4Ans3(e.target.value)}></input>
          <input type="text" name="Q4Opt3txt" value={Q4Opt3} placeholder="Option 3" onChange={(e) => setQ4Opt3(e.target.value)}></input><br/>
          <input type="radio" name="Q4Opt" id="Q4Opt4" onChange={(e) => setQ4Ans4(e.target.value)}></input>
          <input type="text" name="Q4Opt4txt" value={Q4Opt4} placeholder="Option 4" onChange={(e) => setQ4Opt4(e.target.value)}></input><br/>
          </div>
        </div>

        <div>
          <h3 htmlFor="Q5">Question 5</h3>
          <input 
            type="text"
            placeholder="Question 5"
            name="Q5"
            value={Q5}
            onChange={(e) => setQ5(e.target.value)}
          /><br/>
          <div>
          <input type="radio" name="Q5Opt" id="Q5Opt1" onChange={(e) => setQ5Ans1(e.target.value)}></input>
          <input type="text" name="Q5Opt1txt" value={Q5Opt1} placeholder="Option 1" onChange={(e) => setQ5Opt1(e.target.value)}></input><br/>
          <input type="radio" name="Q5Opt" id="Q5Opt2" onChange={(e) => setQ5Ans2(e.target.value)}></input>
          <input type="text" name="Q5Opt2txt" value={Q5Opt2} placeholder="Option 2" onChange={(e) => setQ5Opt2(e.target.value)}></input><br/>
          <input type="radio" name="Q5Opt" id="Q5Opt3" onChange={(e) => setQ5Ans3(e.target.value)}></input>
          <input type="text" name="Q5Opt3txt" value={Q5Opt3} placeholder="Option 3" onChange={(e) => setQ5Opt3(e.target.value)}></input><br/>
          <input type="radio" name="Q5Opt" id="Q5Opt4" onChange={(e) => setQ5Ans4(e.target.value)}></input>
          <input type="text" name="Q5Opt4txt" value={Q5Opt4} placeholder="Option 4" onChange={(e) => setQ5Opt4(e.target.value)}></input><br/>
          </div>
        </div>
            <button type="submit" value="Update Module">Update Module</button>
        </form>
        <button onClick={() => {history.goBack()}}>Cancel</button>
        </>) : (<>
          <div>
            <h1>{title}</h1>
            <textarea contentEditable="false" value={text}></textarea>
            <ReactPlayer url={videoLink}></ReactPlayer>
          </div>
        </>)}
        </div>
    )
}