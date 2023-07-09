import React, { useState } from "react";
import "./footerTime.css";

function FooterTime() {
  const [hr, setHr] = useState(0);
  const [hr_ny, setHr_ny] = useState(0);
  const [hr_bish, setHr_bish] = useState(0);
  setInterval(() => {
    let d_la = new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
    );
    let d_ny = new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    let hr = d_la.getHours();
    let min = d_la.getMinutes();
    let hr_rotation = 30 * hr + min / 2;
    setHr(hr_rotation);

    let hr_ny = d_ny.getHours();
    let min_ny = d_ny.getMinutes();
    let hr_ny_rotation = 30 * hr_ny + min_ny / 2;
    setHr_ny(hr_ny_rotation);

    let d_bish = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Bishkek" })
    );
    let hr_bish = d_bish.getHours();
    let hr_bish_rotation = 30 * hr_bish + hr_bish / 60 / 2;
    setHr_bish(hr_bish_rotation);
  }, 1000);
  return (
    <div class="FooterTime">
      {/* <div id="clockContainer">
        <div style={{ transform: `rotate(${hr}deg)` }} id="hour"></div>
      </div> */}

      <div class="FooterTime__item">
        <div
          class="FooterTime__el"
          id="FooterTime__el__t"
          style={{ transform: `rotate(${hr_bish}deg)` }}
        ></div>
        <p class="FooterTime__item__p">BISHKEK</p>
      </div>

      <div class="FooterTime__item">
        <div
          class="FooterTime__el"
          id="FooterTime__el__f"
          style={{ transform: `rotate(${hr}deg)` }}
        ></div>
        <p class="FooterTime__item__p">LOS ANGELES</p>
      </div>
      <div class="FooterTime__item">
        <div
          class="FooterTime__el"
          id="FooterTime__el__s"
          style={{ transform: `rotate(${hr_ny}deg)` }}
        ></div>
        <p class="FooterTime__item__p">NEW YOURK</p>
      </div>
    </div>
  );
}

export default FooterTime;
