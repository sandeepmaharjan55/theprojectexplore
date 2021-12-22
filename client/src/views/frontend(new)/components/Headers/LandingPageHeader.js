import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
// import AppStoreLogo from "../../../../assets/images/logo/app-store.png";
import BackgroundVideo from "../../../../assets/video/sample.mp4";
// core components

function LandingPageHeader() {
  const pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const VideoBackground = {
    position: "absolute",
    width: "auto",
    height: "auto",
    minWidth: "100%",
    minHeight: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const width = window.innerWidth;
  const breakpoint = 1280;

  const VideoBackgroundContainer = (width > breakpoint) ? {
    // position: "relative",
    // // width: "100vw",
    // height: "60vh",
    // overflow: "hidden",
      minHeight: "80vh",
      maxHeight: "999px",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      zIndex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "60px",
  } : {
    // position: "relative",
    // // width: "100vw",
    // height: "60vh",
    // overflow: "hidden",
      minHeight: "60vh",
      maxHeight: "999px",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      zIndex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "60px",
  };
  const maxWidth = (width > breakpoint) ? {
      position: "absolute",
      bottom: "100px",
      // left: "-5px",
      zIndex: "3",
      width: "100vw",
      fill: "white",
     } : {
      position: "absolute",
      bottom: "210px",
      // left: "-5px",
      zIndex: "3",
      width: "100vw",
      fill: "white",
    };

  return (
    <>
      {/* <div
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      > */}
      {/* <div className="page-header" style={VideoBackgroundContainer} data-parallax={true}
        ref={pageHeader}> */}
         <div className="page-header" style={VideoBackgroundContainer} data-parallax={true}
        ref={pageHeader}>
          <video
            autoPlay
            loop
            muted
            style={VideoBackground}
            src={BackgroundVideo}
            type="video/mp4"
          />
        {/* </div> */}
        <div className="filter" />
        <Container>
          <div className="motto text-left">
            <h1 style={{color:"rgb(113 113 88)"}}>Project Explore</h1>
            <h3 style={{color:"rgb(113 113 88)"}}>“NOT ALL THOSE WHO WANDER ARE LOST.” – J.R.R. TOLKIEN</h3>
            <br />
            {/* <img src={AppStoreLogo} alt="App Store" style={{height:"5vh", marginLeft:"-40px", width:"20vw"}}/>
            <br /> <br /> */}
            {/* <Button style={{borderColor:"rgb(113 113 88)", color:"rgb(113 113 88)"}}
              href="#"
              className="btn-round mr-2"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-apple" /> Download Now IOS
            </Button>
            <Button style={{borderColor:"rgb(113 113 88)", color:"rgb(113 113 88)"}}
            href="https://play.google.com/store/apps/details?id=com.bigfoot.www.inksvilla" 
            className="btn-round" color="neutral" type="button" outline target="_blank">
              <i className="fa fa-play"></i> Download Now Android
            </Button> */}
          </div>
        </Container>
      </div>
      {/* <svg viewBox="0 0 1440 120" style={maxWidth}>
            <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
        </svg> */}
   
 
    </>
  );
}

export default LandingPageHeader;
