import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


import SignIn from "../views/auth/signin/SignIn";
import SignUp from "../views/auth/signup/SignUp";
import Home from "../views/home/Home";
import Feeds from "../views/feeds/Feeds";
import FeedDetails from "../views/feeds/feedDetails/FeedDetails";
import MainNav from "../layouts/navigation/MainNav";
import CreatePost from "../views/createPost/CreatePost";
// import Test from "../views/auth/test"



const Routes = () => {
  return (
    //     <ProvideAuth>



    <Router>
      <Route path="/" component={MainNav} />
      <Route path="/" exact component={Home} />

      <Switch>


        <Route path="/feeds" exact component={Feeds} />
        <Route path="/feeds/:id" component={FeedDetails} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/create-post" exact component={CreatePost} />

      </Switch>

      {/* <Route path="/"  component={Test} /> */}
    </Router>
    //     </ProvideAuth>

  );
}

export default Routes