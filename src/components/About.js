import React from "react";

import { AboutContainer, CenteredText, SubText } from "../styles/About";

function About() {
  return (
    <div className="container">
      <AboutContainer>
        <CenteredText>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CenteredText>
        <SubText>- AVUTEQ TEAM -</SubText>
      </AboutContainer>
    </div>
  );
}

export default About;
