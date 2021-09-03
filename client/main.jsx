import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "/imports/ui/App";

Meteor.startup(() => { 
  Meteor.subscribe("Modules.public");
  render( <App />, document.getElementById("react-target"));
});
