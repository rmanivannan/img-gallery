import React from "react";
import Header from "./common/header/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Pages
import Gallery from "./pages/gallery/gallery-container"
import Upload from "./pages/upload/upload-container"

import 'babel-polyfill';

const PageNotFound = ()=>(<h1>404 Page not found</h1>)

const AppRouter = (history) => (
  <Router >
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Gallery} />
        <Route path="/gallery/" exact component={Gallery} />
        <Route path="/upload/" exact component={Upload} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
