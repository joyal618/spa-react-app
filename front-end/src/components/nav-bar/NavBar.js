import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  position: absolute;
  z-index:12;
  width: 100%;
  height: 10%;
  // padding: 0 20px;
  min-height: 9vh;
  background: rgb(0, 0, 0,0.2);;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 25px;
  color: white;
  padding-left: 20px;
  z-index:11;
  font-weight: bold;
`;

const Nav = styled.nav``;

const Menu = styled.ul`
  list-style: none;
  display: flex;



  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
padding-left: 20px;
cursor: pointer;  
`;

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 12;
  

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  z-index: 11;
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  opacity: ${props => (props.open ? 1 : 0)};
  z-index:12;


  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Search = styled.a`
color: white;
padding-right: 50px;
`;
const SearchItem = styled.div`
  padding-left: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavBar = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Header>
        <Logo>Logo</Logo>
        <Nav>
          <Menu>
            <Item>
              <Link target="#" >
                Home
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Pages
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Portfolio
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Elements
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Features
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Blog
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Shop
            </Link>
            </Item>
          </Menu>
        </Nav>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
        <SearchItem>
          <Search href="#"><i class="fa fa-fw fa-search"></i></Search>
        </SearchItem>
      </Header>
      <Overlay open={toggle}>
        <Nav>
          <OverlayMenu open={toggle}>
            <Item>
              <Link target="#" >
                Home
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Pages
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Portfolio
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Features
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Blog
            </Link>
            </Item>
            <Item>
              <Link target="#">
                Shop
            </Link>
            </Item>
          </OverlayMenu>
        </Nav>
      </Overlay>
    </>
  );
};

export default NavBar;