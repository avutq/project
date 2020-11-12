import React from "react";
import Fade from "react-reveal/Fade";
import {
  FlexContainer,
  Logo,
  Circle,
  MenuContainer,
  MenuItem,
} from "../styles/Header";

function Header() {
  return (
    <div className="container">
      <Fade>
        <FlexContainer>
          <Logo>
            <Circle />
            <span>Project</span>
          </Logo>

          <MenuContainer>
            <MenuItem>About the project</MenuItem>
            <MenuItem>Created by Avuteq</MenuItem>
          </MenuContainer>
        </FlexContainer>
      </Fade>
    </div>
  );
}

export default Header;
