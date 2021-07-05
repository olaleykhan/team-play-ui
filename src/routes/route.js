import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import SignIn from "../views/auth/SignIn";
  import SignUp from "../views/auth/SignUp";
  import Home from "../views/Home";



  const Routes = () => {
    return(
//     <ProvideAuth>
            <Router>
                    <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/sign-in" exact component={SignIn} />
                            <Route path="/sign-up" exact component={SignUp} />  
                    </Switch>
            </Router>
//     </ProvideAuth>
       
    );
}

export default Routes