import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";
import "./AddModule.css";
import { Modules } from "/imports/db/Modules.js";
import { AdminSignUp } from "../AdminSignUp/AdminSignUp.jsx";
import { useHistory } from "react-router";
import { Test, QuestionGroup, Question, Option } from "react-multiple-choice";

export const AddModule = () => {
  const history = useHistory();
  const user = useTracker(() => Meteor.user());
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  // Quiz questions
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");

  // Quiz options
  const [Q1Opt1, setQ1Opt1] = useState("");
  const [Q1Opt2, setQ1Opt2] = useState("");
  const [Q1Opt3, setQ1Opt3] = useState("");
  const [Q1Opt4, setQ1Opt4] = useState("");

  const [Q2Opt1, setQ2Opt1] = useState("");
  const [Q2Opt2, setQ2Opt2] = useState("");
  const [Q2Opt3, setQ2Opt3] = useState("");
  const [Q2Opt4, setQ2Opt4] = useState("");

  const [Q3Opt1, setQ3Opt1] = useState("");
  const [Q3Opt2, setQ3Opt2] = useState("");
  const [Q3Opt3, setQ3Opt3] = useState("");
  const [Q3Opt4, setQ3Opt4] = useState("");

  const [Q4Opt1, setQ4Opt1] = useState("");
  const [Q4Opt2, setQ4Opt2] = useState("");
  const [Q4Opt3, setQ4Opt3] = useState("");
  const [Q4Opt4, setQ4Opt4] = useState("");

  const [Q5Opt1, setQ5Opt1] = useState("");
  const [Q5Opt2, setQ5Opt2] = useState("");
  const [Q5Opt3, setQ5Opt3] = useState("");
  const [Q5Opt4, setQ5Opt4] = useState("");

  // Quiz answers
  const [Q1Ans1, setQ1Ans1] = useState("");
  const [Q1Ans2, setQ1Ans2] = useState("");
  const [Q1Ans3, setQ1Ans3] = useState("");
  const [Q1Ans4, setQ1Ans4] = useState("");
  const [Q2Ans1, setQ2Ans1] = useState("");
  const [Q2Ans2, setQ2Ans2] = useState("");
  const [Q2Ans3, setQ2Ans3] = useState("");
  const [Q2Ans4, setQ2Ans4] = useState("");
  const [Q3Ans1, setQ3Ans1] = useState("");
  const [Q3Ans2, setQ3Ans2] = useState("");
  const [Q3Ans3, setQ3Ans3] = useState("");
  const [Q3Ans4, setQ3Ans4] = useState("");
  const [Q4Ans1, setQ4Ans1] = useState("");
  const [Q4Ans2, setQ4Ans2] = useState("");
  const [Q4Ans3, setQ4Ans3] = useState("");
  const [Q4Ans4, setQ4Ans4] = useState("");
  const [Q5Ans1, setQ5Ans1] = useState("");
  const [Q5Ans2, setQ5Ans2] = useState("");
  const [Q5Ans3, setQ5Ans3] = useState("");
  const [Q5Ans4, setQ5Ans4] = useState("");

  const add = (e) => {
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

    Meteor.call(
      "modules.insert",
      title,
      text,
      timePeriod,
      videoLink,
      ageGroup,
      Q1,
      Q2,
      Q3,
      Q4,
      Q5,
      Q1OptionArray,
      Q2OptionArray,
      Q3OptionArray,
      Q4OptionArray,
      Q5OptionArray,
      Q1AnsArray,
      Q2AnsArray,
      Q3AnsArray,
      Q4AnsArray,
      Q5AnsArray,

      function (error) {
        if (error) {
          alert("Failed to create the new module.");
        } else {
          alert("New module created successfully!");
          history.goBack();
        }
      }
    );
  };

  return (
    <div className="module-background">
      <form onSubmit={add}>
        <div className="module-box">
          <h1 className="module-header">Lesson</h1>
          <div className="module-row">
            <div className="module-col">
              <div>
                <label htmlFor="title" className="label">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="input"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="timePeriod" className="label">
                  Choose a Time Period:{" "}
                </label>
                <select
                  name="Time Period"
                  onChange={(e) => setTimePeriod(e.target.value)}
                  required
                  defaultValue={"Default"}
                  className="input"
                >
                  <option value="Default" disabled selected>
                    Select the Time Period
                  </option>
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
                <label htmlFor="ageGroup" className="label">
                  Choose an Age Group:{" "}
                </label>
                <select
                  name="ageGroupSelect"
                  onChange={(e) => setAgeGroup(e.target.value)}
                  required
                  className="input"
                  defaultValue={"Default"}
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

              <div>
                <label htmlFor="videoLink" className="label">
                  Video Link
                </label>
                <input
                  type="text"
                  placeholder="Video Link"
                  name="videoLink"
                  className="input"
                  onChange={(e) => setVideoLink(e.target.value)}
                />
              </div>
            </div>
            <div className="flex" />
            <div className="module-col">
              <div>
                <label htmlFor="text" className="label">
                  Text
                </label>
                <textarea
                  type="text"
                  placeholder="Text"
                  name="text"
                  required
                  className="text-input"
                  resize="none"
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="module-box">
          <h1 className="module-header">Quiz</h1>
          <h3>
            *Please input questions, options for answers, and then select the
            correct answer
          </h3>
          <div className="row-line" />
          <div className="module-row">
            <div className="module-col">
              <h3 htmlFor="Q1">Question 1</h3>
              <input
                type="text"
                placeholder="Question 1"
                name="Q1"
                className="quiz-question"
                onChange={(e) => setQ1(e.target.value)}
              />
              <br />
            </div>
            <div className="flex" />
            <div className="module-col">
              <div className="spacer" />
              <div>
                <input
                  type="radio"
                  name="Q1Opt"
                  id="Q1Opt1"
                  onChange={(e) => setQ1Ans1(e.target.value)}
                ></input>
                <input
                  type="text"
                  name="Q1Opt1txt"
                  placeholder="Option 1"
                  className="quiz-input"
                  onChange={(e) => setQ1Opt1(e.target.value)}
                ></input>
                <br />
                <div className="spacer" />
                <input
                  type="radio"
                  name="Q1Opt"
                  id="Q1Opt2"
                  onChange={(e) => setQ1Ans2(e.target.value)}
                ></input>
                <input
                  type="text"
                  name="Q1Opt2txt"
                  placeholder="Option 2"
                  className="quiz-input"
                  onChange={(e) => setQ1Opt2(e.target.value)}
                ></input>
                <br />
              </div>
            </div>
            <div className="flex" />
            <div className="module-col">
              <div>
                <div className="spacer" />
                <input
                  type="radio"
                  name="Q1Opt"
                  id="Q1Opt3"
                  onChange={(e) => setQ1Ans3(e.target.value)}
                ></input>
                <input
                  type="text"
                  name="Q1Opt3txt"
                  placeholder="Option 3"
                  className="quiz-input"
                  onChange={(e) => setQ1Opt3(e.target.value)}
                ></input>
                <br />
                <div className="spacer" />
                <input
                  type="radio"
                  name="Q1Opt"
                  id="Q1Opt4"
                  onChange={(e) => setQ1Ans4(e.target.value)}
                ></input>
                <input
                  type="text"
                  name="Q1Opt4txt"
                  placeholder="Option 4"
                  className="quiz-input"
                  onChange={(e) => setQ1Opt4(e.target.value)}
                ></input>
                <br />
              </div>
            </div>
          </div>
          <div className="row-line" />
          <div>
            <div className="module-row">
              <div className="module-col">
                <h3 htmlFor="Q2">Question 2</h3>
                <input
                  type="text"
                  placeholder="Question 2"
                  name="Q2"
                  className="quiz-question"
                  onChange={(e) => setQ2(e.target.value)}
                />
                <br />
              </div>
              <div className="flex" />
              <div className="module-col">
                <div className="spacer" />
                <div>
                  <input
                    type="radio"
                    name="Q2Opt"
                    id="Q2Opt1"
                    onChange={(e) => setQ2Ans1(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q2Opt1txt"
                    placeholder="Option 1"
                    className="quiz-input"
                    onChange={(e) => setQ2Opt1(e.target.value)}
                  ></input>
                  <br />
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q2Opt"
                    id="Q2Opt2"
                    onChange={(e) => setQ2Ans2(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q2Opt2txt"
                    placeholder="Option 2"
                    className="quiz-input"
                    onChange={(e) => setQ2Opt2(e.target.value)}
                  ></input>
                  <br />
                </div>
              </div>
              <div className="flex" />
              <div className="module-col">
                <div className="spacer" />
                <div>
                  <input
                    type="radio"
                    name="Q2Opt"
                    id="Q2Opt3"
                    onChange={(e) => setQ2Ans3(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q2Opt3txt"
                    placeholder="Option 3"
                    className="quiz-input"
                    onChange={(e) => setQ2Opt3(e.target.value)}
                  ></input>
                  <br />
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q2Opt"
                    id="Q2Opt4"
                    onChange={(e) => setQ2Ans4(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q2Opt4txt"
                    placeholder="Option 4"
                    className="quiz-input"
                    onChange={(e) => setQ2Opt4(e.target.value)}
                  ></input>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="row-line" />
          <div>
            <div className="module-row">
              <div className="module-col">
                <h3 htmlFor="Q3">Question 3</h3>
                <input
                  type="text"
                  placeholder="Question 3"
                  name="Q3"
                  className="quiz-question"
                  onChange={(e) => setQ3(e.target.value)}
                />
                <br />
              </div>
              <div className="flex" />
              <div className="module-col">
                <div>
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q3Opt"
                    id="Q3Opt1"
                    onChange={(e) => setQ3Ans1(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q3Opt1txt"
                    placeholder="Option 1"
                    className="quiz-input"
                    onChange={(e) => setQ3Opt1(e.target.value)}
                  ></input>
                  <br />
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q3Opt"
                    id="Q3Opt2"
                    onChange={(e) => setQ3Ans2(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q3Opt2txt"
                    placeholder="Option 2"
                    className="quiz-input"
                    onChange={(e) => setQ3Opt2(e.target.value)}
                  ></input>
                  <br />
                </div>
              </div>
              <div className="flex" />
              <div className="module-col">
                <div>
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q3Opt"
                    id="Q3Opt3"
                    onChange={(e) => setQ3Ans3(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q3Opt3txt"
                    placeholder="Option 3"
                    className="quiz-input"
                    onChange={(e) => setQ3Opt3(e.target.value)}
                  ></input>
                  <br />
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q3Opt"
                    id="Q3Opt4"
                    onChange={(e) => setQ3Ans4(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q3Opt4txt"
                    placeholder="Option 4"
                    className="quiz-input"
                    onChange={(e) => setQ3Opt4(e.target.value)}
                  ></input>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row-line" />
            <div className="module-row">
              <div className="module-col">
                <h3 htmlFor="Q4">Question 4</h3>
                <input
                  type="text"
                  placeholder="Question 4"
                  name="Q4"
                  className="quiz-question"
                  onChange={(e) => setQ4(e.target.value)}
                />
                <br />
              </div>
              <div className="flex" />
              <div className="module-col">
                <div>
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q4Opt"
                    id="Q4Opt1"
                    onChange={(e) => setQ4Ans1(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q4Opt1txt"
                    placeholder="Option 1"
                    className="quiz-input"
                    onChange={(e) => setQ4Opt1(e.target.value)}
                  ></input>
                  <br />
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q4Opt"
                    id="Q4Opt2"
                    onChange={(e) => setQ4Ans2(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q4Opt2txt"
                    placeholder="Option 2"
                    className="quiz-input"
                    onChange={(e) => setQ4Opt2(e.target.value)}
                  ></input>
                  <br />
                </div>
              </div>
              <div className="flex" />
              <div className="module-col">
                <div>
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q4Opt"
                    id="Q4Opt3"
                    onChange={(e) => setQ4Ans3(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q4Opt3txt"
                    placeholder="Option 3"
                    className="quiz-input"
                    onChange={(e) => setQ4Opt3(e.target.value)}
                  ></input>
                  <br />
                  <div className="spacer" />
                  <input
                    type="radio"
                    name="Q4Opt"
                    id="Q4Opt4"
                    onChange={(e) => setQ4Ans4(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q4Opt4txt"
                    placeholder="Option 4"
                    className="quiz-input"
                    onChange={(e) => setQ4Opt4(e.target.value)}
                  ></input>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="row-line" />
          <div>
            <div className="module-row">
              <div className="module-col">
                <h3 htmlFor="Q5">Question 5</h3>
                <input
                  type="text"
                  placeholder="Question 5"
                  name="Q5"
                  className="quiz-question"
                  onChange={(e) => setQ5(e.target.value)}
                />
                <br />
              </div>
              <div className="flex"/>
              <div className="module-col">
                <div>
                <div className="spacer"/>
                  <input
                    type="radio"
                    name="Q5Opt"
                    id="Q5Opt1"
                    onChange={(e) => setQ5Ans1(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q5Opt1txt"
                    placeholder="Option 1"
                    className="quiz-input"
                    onChange={(e) => setQ5Opt1(e.target.value)}
                  ></input>
                  <br />
                  <div className="spacer"/>
                  <input
                    type="radio"
                    name="Q5Opt"
                    id="Q5Opt2"
                    onChange={(e) => setQ5Ans2(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    name="Q5Opt2txt"
                    placeholder="Option 2"
                    className="quiz-input"
                    onChange={(e) => setQ5Opt2(e.target.value)}
                  ></input>
                  <br />
                </div>
              </div>
              <div className="flex"/>
              <div className="module-col">
                <div>
                <div className="spacer"/>
              <input
                type="radio"
                name="Q5Opt"
                id="Q5Opt3"
                onChange={(e) => setQ5Ans3(e.target.value)}
              ></input>
              <input
                type="text"
                name="Q5Opt3txt"
                placeholder="Option 3"
                className="quiz-input"
                onChange={(e) => setQ5Opt3(e.target.value)}
              ></input>
              <br />
              <div className="spacer"/>
              <input
                type="radio"
                name="Q5Opt"
                id="Q5Opt4"
                onChange={(e) => setQ5Ans4(e.target.value)}
              ></input>
              <input
                type="text"
                name="Q5Opt4txt"
                placeholder="Option 4"
                className="quiz-input"
                onChange={(e) => setQ5Opt4(e.target.value)}
              ></input>
              <br />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-holder">
          <input
            type="submit"
            value="Publish Module"
            className="button"
          ></input>
        </div>
        <div className="button-holder">
          <button
            className="button"
            onClick={() => {
              history.goBack();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
