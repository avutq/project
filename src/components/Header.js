import React from "react";

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
    </div>
  );
}

export default Header;
