import styled from "styled-components"
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
background-color: chocolate;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1rem 1rem;
height: 3rem;
align-items: center;
`
export const NavbarLogoContainer = styled.div`
  width: 8rem;
`

export const NavbarLink = styled(Link)``

export const NavbarImg = styled.img`
`

export const NavbarSearchContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const NavbarForm = styled.form`

`
export const FormInput = styled.input`
  height: 1.7rem;
  border-radius: 0.6rem;
  width: 20rem;
  outline: none;
`

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

`