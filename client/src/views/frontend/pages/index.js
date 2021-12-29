import React, { Component, Fragment} from "react";
import NavbarSection from "../components/Navbar/MainNavigation";
import CarouselSection from "../components/Header/Carousel";
import VideoSection from "../components/Header/VideoSection";
import DataCard from "../components/DataCard/DataCards";
import FooterSection from "../components/Footer/Footer";
// import '../components/modal/modal.css';

// import "bootstrap/scss/bootstrap.scss";
// import "../../assets/scss/paper-kit.scss";
// import "../../assets/demo/demo.css?v=1.3.0";

export class IndexPage extends Component {
  render() {
    return (
      <div>
        <NavbarSection />
        <VideoSection />
        {/* <CarouselSection /> */}
        <DataCard />
        <FooterSection />
      </div>
    );
  }
}

export default IndexPage;
