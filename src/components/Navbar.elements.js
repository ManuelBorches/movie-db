import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  height: 6rem;
  background-color: #383e56;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;
`;
export const NavbarLogoContainer = styled.div`
    display: flex;
    width: 6rem;
    padding-left: 1rem;
  
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
  @media screen and (max-width: 768px) {
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
export const NavbarLink = styled(Link)`
width: 6rem;
`;
export const NavbarImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavbarSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const NavbarForm = styled.form`
  display: flex;
`;
export const FormInput = styled.input`
  height: 1.7rem;
  margin: 0 .2rem;
  border-radius: 0.6rem;
  width: 20rem;
  outline: none;

  @media (max-width: 600px) {
    width: 8rem;
  }
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 12px;
  height: 35px;
  width: 5rem;

  &:hover {
    cursor: pointer;
    background-color: chocolate;
  }
`;
