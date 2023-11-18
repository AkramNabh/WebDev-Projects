import React from "react";
import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import logo from '../images/logo.png'

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled(LinkR)`

justify-self: flex-start;
padding-left: 60px;
cursor: pointer;
text-decoration: none;
align-items: center;
@media screen and (max width: 640px){
    padding: 0 0px;

}
`;

const NavList = styled.div`
  flex: 1; /* Take up remaining space in the middle */
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally */
  gap: 50px;
  height: 30px;
  border: 1px solid #ccc; /* Add a 1px solid border with a gray color */
  border-radius: 4px; /* Add border-radius for rounded corners */
  padding: 10px;

`;

const NavComp = styled.a`
color: #121237ff;
font-size: 25px;
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
&:hover{
    color: #8B8C8Dff;
}
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;


const LogoText = styled.h3`
color: #8B8C8Dff;
`;


const Navbar = ()=>{
    return(
        <Container>
                <NavLogo to='/'> 
                    <a href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: "20",
                        cursor: "pointer"
                    }}>
                        <Logo src={logo} alt="logo"/>
                        <LogoText>LCC trading</LogoText>
                    </a>
                 </NavLogo>
            <NavList>
                <NavComp href="/">home</NavComp>
                <NavComp href="/">about</NavComp>
                <NavComp href="/">projects</NavComp>
            </NavList>
        </Container>
    )
}

export default Navbar;