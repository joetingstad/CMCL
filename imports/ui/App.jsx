import React, { Component, useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { LoginForm } from "./LoginForm/LoginForm.jsx";
import { HomeForm } from "./HomeForm/HomeForm.jsx";
import { HomeRedirect } from "./HomeRedirect";
import { SignUp } from "./SignUp/SignUp.jsx";
import { UserPage } from "./UserPage/UserPage.jsx";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, browserHistory, BrowserRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import "./AppStyle.css"
import { CivilRightsPage } from "./TimePeriods/CivilRights/CivilRights.jsx";
import { CivilWarPage } from "./TimePeriods/CivilWar/CivilWar.jsx";
import { OOSTPage } from "./TimePeriods/OOST/OOST.jsx";
import { PostCivilRightsPage } from "./TimePeriods/PostCivilRights/PostCivilRights.jsx";
import { PresentPage } from "./TimePeriods/Present/Present.jsx";
import { ReconstructionPage } from "./TimePeriods/Reconstruction/Reconstruction.jsx";
import { RiseOfKKKPage } from "./TimePeriods/RiseOfKKK/RiseOfKKK.jsx";
import { WW2Page } from "./TimePeriods/WW2/WW2.jsx";
import { Modules } from "/imports/db/Modules.js";
import { Quizes } from "/imports/db/Quizes.js";
import { ModifyModule } from "/imports/ui/Module/ModifyModule.jsx";
import { AddModule } from "/imports/ui/Module/AddModule.jsx";
import { AdminSignUp } from "./AdminSignUp/AdminSignUp.jsx";
import { ViewModule } from "/imports/ui/Module/ViewModule.jsx";
import { ViewQuiz } from "/imports/ui/Module/ViewQuiz.jsx";
import { ModuleOverview } from "/imports/ui/Module/ModuleOverview.jsx";


var displayList = [];

export const App = () => {
  const history = createBrowserHistory({forceRefresh:true});
  const user = useTracker(() => Meteor.user());
  console.log(user)
  

  const goToHome = () => {
    window.location.assign("/home")
  }

  var pageContents = useTracker(() => Modules.find({}).fetch() );
  var dispList = []
  for (let i = 0; i < pageContents.length; i++) {
    dispList.push("/" + pageContents[i]._id)
  }

  const AdminRoutes = [];
  const UserRoutes = [];
  for (let i = 0; i < dispList.length; i++) {
    AdminRoutes.push(<Route path={dispList[i]} component={ModifyModule} key={dispList[i]}></Route>);
    AdminRoutes.push(<Route path={dispList[i] + "/module"} component={ViewModule} key={dispList[i] + "/module"}></Route>);
    AdminRoutes.push(<Route path={dispList[i] + "/quiz"} component={ViewQuiz} key={dispList[i] + "/quiz"}></Route>);
    AdminRoutes.push(<Route path={dispList[i] + "/overview"} component={ModuleOverview} key={dispList[i] + "/overview"}></Route>)
    UserRoutes.push(<Route path={dispList[i] + "/module"} component={ViewModule} key={dispList[i] + "/module"}></Route>);
    UserRoutes.push(<Route path={dispList[i] + "/quiz"} component={ViewQuiz} key={dispList[i] + "/quiz"}></Route>);
    UserRoutes.push(<Route path={dispList[i] + "/overview"} component={ModuleOverview} key={dispList[i] + "/overview"}></Route>);
  }
  //const routes = dispList.map((mod) => {
  //  return <Route path={mod} component={ModifyModule} key={mod}></Route>
  //})

  return (
    <Router history={browserHistory}>
      <div className="app">
        {!user ? (
          <>
          <header>
          <div className="app-bar">
            <div className="app-header">
              <h1>
                Carl Maxey Center for Learning 📚
              </h1>
            </div>
          </div>
        </header>
          </>
        ):(<>
          <header>
          <div className="app-bar">
            <div className="app-header">
              <h1 id="siteTitle" onClick={goToHome}>
                Carl Maxey Center for Learning 📚
              </h1>
            </div>
            <Link to="/user-page">
              <button type="button" className="User" >
                {user.username}
              </button>
              </Link>
          </div>
        </header>
          </>)}
        
        <div className="main">
          
        {(user && user.profile.isadmin) ? (
            <Route path="/" component={HomeRedirect}>
              {AdminRoutes}
              <Route path="/home" component={HomeForm}/>
              <Route path="/user-page" component={UserPage}/>
              <Route path='/Civil-Rights' component={CivilRightsPage}/>
              <Route path='/CivilWar' component={CivilWarPage}/>
              <Route path='/OOST' component={OOSTPage}/>
              <Route path='/Post-Civil-Rights' component={PostCivilRightsPage}/>
              <Route path='/Present' component={PresentPage}/>
              <Route path='/Reconstruction' component={ReconstructionPage}/>
              <Route path='/Rise-Of-KKK' component={RiseOfKKKPage}/>
              <Route path='/WW2' component={WW2Page}/>
              <Route path="/admin-sign-up" component={AdminSignUp}/>
              <Route path="/AddModule" component={AddModule}/>
              <Route path="/ModifyModule" component={ModifyModule}/>
            </Route>
            ): (user) ? (
              <Route path="/" component={HomeRedirect}>
                  {UserRoutes}
                  <Route path="/home" component={HomeForm}/>
                  <Route path="/user-page" component={UserPage}/>
                  <Route path='/Civil-Rights' component={CivilRightsPage}/>
                  <Route path='/CivilWar' component={CivilWarPage}/>
                  <Route path='/OOST' component={OOSTPage}/>
                  <Route path='/Post-Civil-Rights' component={PostCivilRightsPage}/>
                  <Route path='/Present' component={PresentPage}/>
                  <Route path='/Reconstruction' component={ReconstructionPage}/>
                  <Route path='/Rise-Of-KKK' component={RiseOfKKKPage}/>
                  <Route path='/WW2' component={WW2Page}/>
                </Route>
            ) : (
            <Switch>              
              <Route path="/" component={HomeRedirect}>
                <Route path="/login" component={LoginForm}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/admin-login" component={ModifyModule}>Admin Login</Route>
                <Route path="/password-reset" component={ModifyModule}>Password Reset</Route>
              </Route>
            </Switch>) }
          
        </div>
      </div>
    </Router>
  );
};
