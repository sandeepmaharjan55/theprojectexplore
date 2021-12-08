import React, { Component } from "react";

import "./assets/css/index.css";
import "./assets/css/global.css";
import "./assets/css/insidefile.css";

import TopPart from "./Top";
import Publisher from "./Publisher";
import HeadTags from "./HeadTag";
import TestFile from "./TestFile";

export class Apsp extends Component {
  render() {
    return (
      <div>
        <HeadTags />
        <TestFile />
        {/* <TopPart /> */}
        {/* <Publisher /> */}
      </div>
    );
  }
}

export default Apsp;
