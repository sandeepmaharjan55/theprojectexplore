import React, { Component } from "react";

// styles
import "bootstrap/scss/bootstrap.scss";
import "./assets/scss/paper-kit.scss?v=1.3.0";
import "./assets/demo/demo.css?v=1.3.0";
// pages
import Index from "./views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import LandingPage from "./views/pages/LandingPage.js";
import ProfilePage from "./views/pages/ProfilePage.js";
import RegisterPage from "./views/pages/RegisterPage.js";


export class IndexPage extends Component {
  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

export default IndexPage;

