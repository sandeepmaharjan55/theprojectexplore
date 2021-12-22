import React, { Component, useState, useEffect} from "react";
import BackgroundVideo from "../../assets/sample.mp4";

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
const VideoBackgroundContainer = {
  position: "relative",
  width: "100vw",
  height: "60vh",
  overflow: "hidden",
};
const VideoWave = {
  position: "absolute",
  bottom: "-50px",
  // bottom: "-5px", for other screens
  left: "-10px",
  zIndex: "3",
  width: "105vw",
  fill: "white",
};

export class VideoSection extends Component {
    
  render() {
    // const { height, width } = useWindowDimensions();
    const width = window.innerWidth;
    const breakpoint = 1280;
    const maxWidth = (width > breakpoint) ? {
        position: "absolute",
        bottom: "-50px",
        left: "-10px",
        zIndex: "3",
        width: "105vw",
        fill: "white",
      } : {
        position: "absolute",
        bottom: "-5px",
        left: "-10px",
        zIndex: "3",
        width: "105vw",
        fill: "white",
      };
    return (
      <div>
        <div style={VideoBackgroundContainer}>
          <video
            autoPlay
            loop
            muted
            style={VideoBackground}
            src={BackgroundVideo}
            type="video/mp4"
          />
          <svg viewBox="0 0 1440 120" style={maxWidth}>
            <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default VideoSection;
