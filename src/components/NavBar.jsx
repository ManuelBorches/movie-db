import React from "react";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  MenuBar,
  MobileIcon,
  NavItem,
  NavbarMenu,
  NavbarContainer,
  NavbarLogoContainer,
  NavbarLink,
  FormInput,
  Button,
  NavbarImg,
  NavbarSearchContainer,
  NavbarForm,
} from "./Navbar.elements";
import { FaBars } from "react-icons/fa";

const NavBar = ({
  handleChange,
  handleSubmit,
  backToHome,
  searchInput,
  handleRating,
  ratingValue,
}) => {
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
        {/* <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend"></Typography>
          <Rating
            name="simple-controlled"
            value={ratingValue}
            onChange={(event, newValue) => {
              handleRating(newValue);
            }}
          />
        </Box> */}
        <NavbarForm onSubmit={handleSubmit}>
          <FormInput type="text" value={searchInput} onChange={handleChange} />
          <Button onClick={handleSubmit}>search</Button>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
        </NavbarForm>
      </NavbarSearchContainer>
    </NavbarContainer>
  );
};

export default NavBar;
