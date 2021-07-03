/** @jsxImportSource @emotion/react */
import React from "react";
import "twin.macro";

import { HeaderContainer, NavPage, Login } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <NavPage>home</NavPage>
      <NavPage>about</NavPage>
      <NavPage>contact</NavPage>
      <Login>login</Login>
    </HeaderContainer>
  );
}

export default Header;
