import React from "react";
import CertPic from "./CertPic";
import "./AboutMeCardMob.scss";

const AboutMeCardMob = () => (
  <>
    <div className="words-mob">
      <p className="words-p">
        {" "}
        Hey there! <br></br>
        <br></br> I'm Taylor Covington, a Software Engineer on a cybersecurity
        IDaaS team from Salt Lake City, UT. My daily technology is HTML, CSS,
        JavaScript, Azure AD B2C, Python, and Jenkins. I graduated from DevPoint
        Labs Full-Stack Web Developer Bootcamp in 2019 where we used Ruby on
        Rails and React.js to build full-stack applications.{" "}
      </p>
    </div>
    <CertPic />
    <br></br>
    <div className="words-mob">
      <p className="words-p">
        I am currently learning the full stack Java and automated pipelines
        using Jenkins.
      </p>
    </div>
  </>
);

export default AboutMeCardMob;
