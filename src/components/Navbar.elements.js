import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  height: 6rem;
  background-color: #383e56;
  display: flex;
  padding-left: 10px;
  align-items: center;

  @media (min-width: 599px) {
    justify-content: space-between;
  }
`;
export const NavbarLogoContainer = styled.div`
  width: 4rem;
  height: 4rem;

  display: none;

  @media (min-width: 700px) {
    display: flex;
    width: 4rem;
    padding-left: 1rem;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  max-width: 100px;
`;

export const NavItem = styled.li`
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #01bf71;
    transition: all 0.2s ease-in-out;
  }
`;

export const MenuBar = styled.div`
  height: 100px;
  max-width: 100px;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 698px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavbarLink = styled(Link)``;
export const NavbarImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavbarSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 599px) {
    padding-left: 40px;
  }
`;

export const NavbarForm = styled.form``;
export const FormInput = styled.input`
  height: 1.7rem;
  border-radius: 0.6rem;
  width: 10rem;
  outline: none;

  @media (min-width: 599px) {
    width: 20rem;
  }
`;

export const Button = styled.button`
  margin: 0 2rem;
  background-color: white;
  border-radius: 12px;
  height: 35px;
  width: 5rem;

  &:hover {
    cursor: pointer;
    background-color: chocolate;
  }
`;
