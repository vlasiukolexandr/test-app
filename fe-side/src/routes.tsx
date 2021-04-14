
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';

 
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
}
 