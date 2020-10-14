import React from "react";

import CertificatePic from "./AboutMeCertPicFull";

import "../Home.scss";

const AboutMeCard = () => (
  <>
    <div className="words">
      <p className="words-p">
        {" "}
        Hey there! <br></br>
        <br></br> I'm Taylor Covington, a Software Engineer on a cybersecurity
        IDaaS team from Salt Lake City, UT. My daily technology is HTML, CSS,
        JavaScript, Azure AD B2C, Python, and Jenkins. I graduated from DevPoint
        Labs Full-Stack Web Developer Bootcamp in 2019 where we used Ruby on
        Rails and React.js to build full-stack applications.{" "}
      </p>
      {/* </div> */}
      {/* <CertificatePic style={{alignItems: 'left'}}/> */}
      {/* <div className="words"> */}
      <p className="words-p">
        I am currently learning the full stack Java and automated pipelines
        using Jenkins.
      </p>
    </div>
  </>
);

export default AboutMeCard;
