import React, { useEffect } from "react";
import "./sideElements.css";
const SideElements = () => {
  return (
    // <div className="SideElements">
    //   <div class="SideElements__left">
    //     WEST HOLLYWOOD 750 N SAN VICENTE BLVD STE 800
    //   </div>
    //   <div className="SideElements__right">
    //     <p className="SideElements__right__p">Site of the day</p>
    //     <h1 className="SideElements__right__title">W.</h1>
    //   </div>
    //   <div className="SideElements__vibe"></div>
    //   <p className="SideElements__p">@ 2023 WONTED FOR NOTHING</p>
    // </div>
    <div className="SideElements">
      <div class="page-details__location">
        <div class="page-details__location-inner SideElements__left">
          <p class="page-details__location-text body-font">
            <strong>West Hollywood </strong> 750 N San Vicente Blvd Ste
            800&nbsp;&nbsp;&nbsp;
            <strong>West Hollywood </strong> 750 N San Vicente Blvd Ste
            800&nbsp;&nbsp;&nbsp;
            <strong>West Hollywood </strong> 750 N San Vicente Blvd Ste
            800&nbsp;&nbsp;&nbsp;
          </p>
          <p class="page-details__location-text body-font">
            <strong>West Hollywood </strong> 750 N San Vicente Blvd Ste
            800&nbsp;&nbsp;&nbsp;
            <strong>West Hollywood </strong> 750 N San Vicente Blvd Ste
            800&nbsp;&nbsp;&nbsp;
          </p>
        </div>
      </div>
      <div className="SideElements__right">
        <p className="SideElements__right__p">Site of the day</p>
        <h1 className="SideElements__right__title">W.</h1>
      </div>
      <div className="SideElements__vibe"></div>
      <p className="SideElements__p">@ 2023 WONTED FOR NOTHING</p>
    </div>
  );
};

export default SideElements;
