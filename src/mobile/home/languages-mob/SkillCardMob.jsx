import React from 'react';
import {Fade} from 'react-reveal';

const SkillCard = (props) => (

  <>
  {/* <Fade left > */}
    <div className="skill-wrapper-mob">
      <h3>{props.name}</h3>
    </div>
  {/* </Fade> */}

  </>
)

export default SkillCard;