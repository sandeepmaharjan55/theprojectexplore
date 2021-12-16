import React, { Component, Fragment} from "react";
import NavbarSection from "../components/layout/MainNavigation";
import CarouselSection from "../components/Carousel";
import VideoSection from "../components/VideoSection";
import DataCard from "../components/DataCards";
// import '../components/modal/modal.css';
export class IndexPage extends Component {
  render() {
    return (
      <div>
        <NavbarSection />
        <VideoSection />
        {/* <CarouselSection /> */}
        <DataCard />
      </div>
    );
  }
}

export default IndexPage;
