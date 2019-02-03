import React from "react";
import Header from "./common/header";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Gallery from "./pages/gallery/gallery-container"
import Upload from "./pages/upload/upload-container"

import 'babel-polyfill';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact component={Gallery} />
      <Route path="/gallery/" component={Gallery} />
      <Route path="/upload/" component={Upload} />
    </div>
  </Router>
);

export default AppRouter;
