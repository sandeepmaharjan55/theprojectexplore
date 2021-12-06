import React, { Component } from "react";
// import "./assets/css/global.css";
// import "./assets/css/index.css";
// import "./assets/css/global.css";
// import "./assets/css/insidefile.css";
import TopPart from "./Top";
import AfterTopPart from "./AfterTop";

export class Apsp extends Component {
  render() {
    return (
      <div>
        <TopPart />
        <AfterTopPart />
      </div>
    );
  }
}

export default Apsp;
