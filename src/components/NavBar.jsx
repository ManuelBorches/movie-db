import React from "react";
import {
  NavbarContainer,
  NavbarLogoContainer,
  NavbarLink,
  FormInput,
  Button,
  NavbarImg,
  NavbarSearchContainer,
  NavbarForm,
} from "./Navbar.elements";

const NavBar = ({ handleChange, handleSubmit, backToHome, searchInput }) => {
  return (
    <NavbarContainer>
      <NavbarLogoContainer onClick={backToHome}>
        <NavbarLink to={"/"}>
          <NavbarImg
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt="the moviedb logo"
          />
        </NavbarLink>
      </NavbarLogoContainer>
      <NavbarSearchContainer>
        <NavbarForm onSubmit={handleSubmit}>
          <FormInput type="text" value={searchInput} onChange={handleChange} />
          <Button onClick={handleSubmit}>search</Button>
        </NavbarForm>
      </NavbarSearchContainer>
    </NavbarContainer>
  );
};

export default NavBar;
