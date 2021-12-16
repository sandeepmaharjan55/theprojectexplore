import React, { Component, Fragment} from "react";
// import "./assets/css/index.css";
// import "./assets/css/global.css";
// import "./assets/css/insidefile.css";


// import '@styles/base/bootstrap.scss'

import TopPart from "./Top";
import Publisher from "./Publisher";
import HeadTags from "./HeadTag";
import TestFile from "./TestFile";
import ModalSection from "./Modal";
import Allinone from "./Allinone";
import ThisOne from "./ThisOne";

export class Apsp extends Component {
  render() {
    return (
      <>
        {/* <HeadTags /> */}
     {/* <TestFile /> */}
        <Allinone />
        {/* <ThisOne />  */}
        {/* <Publisher /> */}
      </>
    );
  }
}

export default Apsp;
