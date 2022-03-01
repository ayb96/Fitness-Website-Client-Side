import React from "react";

export default function VirtualTour() {
  return (
    <div>
      <iframe
        src="https://www.theasys.io/viewer/hqnDbHkEVFN8AWKnyQsRidhupUjJN1"
        allowfullscreen="true"
        frameborder="0"
        scrolling="no"
        allow="vr;gyroscope;accelerometer"
        height="450"
        style={{ width: "100%", border: "none" }}
      ></iframe>
    </div>
  );
}
