import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Modules } from "/imports/db/Modules.js";
import React, { useState } from "react";
import "./PostCivilRights.css";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//NEED TO DUPE 109-111////ERROR LINE 44 fix how handle is video could do a select yes or no and require a selection////NEED TO ADD CSS STYLING////MUST ADD BUTTON LINK TO INDIVIDUAL MODULE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Store the mongo DB query result here
var displayList = [];
var moduleList = [];
var bgColor = "rgb(67, 179, 57)";

export const PostCivilRightsPage = () => {
  const user = useTracker(() => Meteor.user());
  var userAgeGroup = user.profile.ageGroup;

  var pageContents;
  if (!user.profile.isadmin) {
    pageContents = useTracker(() =>
      Modules.find({ ageGroup: userAgeGroup }, {timePeriod: "Post Civil Rights"} ).fetch()
    );
  }
  else {
    pageContents = useTracker(() => 
      Modules.find( { timePeriod: "Post Civil Rights" } ).fetch()
    );
  }

  //display all text from all elements in specific time period
  for (let i = 0; i < pageContents.length; i++) {
    displayList.push([pageContents[i].title, pageContents[i]._id]);
  }

  console.log(displayList)
  const changecolor = (e) => {
    for (let i = 0; i < moduleList.length; i++) {
      document.getElementById(moduleList[i].props.id).style.backgroundColor = "";
    }
    e.target.style.backgroundColor = "#43b339";
  };

  const modifyModule = () => {
    var tempLoc = null;
    for (let i = 0; i < moduleList.length; i++) {
      if (
        document.getElementById(moduleList[i].props.id).style
          .backgroundColor === bgColor
      ) {
        tempLoc = "/" + moduleList[i].props.id;
      }
    }
    if (tempLoc == null) {
      console.log("Cannot assign to null page");
    } else {
      window.location.assign(tempLoc);
    }
  };


    const changeColorAndModify = (e) => {
        var tempLoc = null;
        for(let i = 0; i < userModuleList.length; i++){
            document.getElementById(userModuleList[i].props.id).style.backgroundColor = "";
        }
        e.target.style.backgroundColor = "#43b339";

        for(let i = 0; i < userModuleList.length; i++){
            if(document.getElementById(userModuleList[i].props.id).style.backgroundColor === bgColor){
                tempLoc = "/" + userModuleList[i].props.id + "/module";
            }
        }
        if (tempLoc == null) {
            console.log('Cannot assign to null page');
        } else {
            window.location.assign(tempLoc);
        }
    
  };

  const deleteModule = () => {
    for (let i = 0; i < moduleList.length; i++) {
      if (
        document.getElementById(moduleList[i].props.id).style
          .backgroundColor === bgColor
      ) {
        if (
          window.confirm(
            "Are you sure you want to delete " + moduleList[i].props.value + "?"
          )
        ) {
          Meteor.call(
            "modules.remove",
            moduleList[i].props.id,
            function (error) {
              if (error) {
                console.log(error);
                alert("Could not delete the module.");
              } else {
                console.log("Deletion Successful");
                alert("The module has been deleted");
                window.location.reload(true);
              }
            }
          );
        }
      }
    }
  };

  const addModule = () => {
    // Redirect user to the add module page
    window.location.assign("/AddModule");
  };

  const moduleList = displayList.map((moduleTitle) => {
      return (
        <button
        style={{ backgroundColor: "" }}
        onClick={changecolor}
        onDoubleClick={modifyModule}
        id={moduleTitle[1]}
      >
        {moduleTitle[0]}
      </button>
      );
  });

  const userModuleList = displayList.map((moduleTitle) => {
    return (
      <button
        style={{ backgroundColor: "" }}
        onClick={changeColorAndModify}
        id={moduleTitle[1]}
        key={moduleTitle[1]}
      >
        {moduleTitle[0]}
      </button>
    );
  });

  //this is basically just the signup page
  return (
    <div className="module-box">
      {user && user.profile.isadmin ? (
        <>
          <h1 className="module-header">Post Civil Rights</h1>
          <div className="module-button-holder">
            <button onClick={addModule}>Create New Module</button>
            <button onClick={modifyModule}>Modify Selected Module</button>
            <button onClick={deleteModule}>Delete Selected Module</button>
          </div>
          {moduleList}
        </>
      ) : (
        <>
          <h1 className="module-header">Post Civil Rights</h1>
          <br />
          <h2 className="header-center">Select a Module Below and Begin Learning!</h2>
          <div className="line"/>
          {userModuleList}
        </>
      )}
      {displayList}
    </div>
  );
};
