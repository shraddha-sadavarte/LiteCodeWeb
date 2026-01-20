import React, { useState } from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

/* ================= STYLES ================= */

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
`;

const Nav = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 48px;
`;

const Brand = styled.span`
  font-size: 1.6rem;
  font-weight: 800;
`;

const Lite = styled.span`
  color: #0ea5e9;
`;

const Code = styled.span`
  color: #fb923c;
`;

const MenuWrap = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.2rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled(NavLink)`
  font-size: 1.05rem;
  font-weight: 500;
  color: #0ea5e9;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #fb923c;
  }

  &.active {
    color: #fb923c;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: #fb923c;
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const CTA = styled(Link)`
  padding: 0.65rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  background-color: #2563eb; /* blue */
  transition: all 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-1px);
  }
`;



const MobileBtn = styled.button`
  background: none;
  border: none;
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

/* ===== MOBILE DROPDOWN (NOT FULL SCREEN) ===== */

const MobileDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 1rem;
  background: white;
  width: 220px;
  border-radius: 14px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileLink = styled(Link)`
  font-size: 1.05rem;
  font-weight: 500;
  color: #0ea5e9;
  text-decoration: none;

  &:hover {
    color: #fb923c;
  }
`;

/* ================= COMPONENT ================= */

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <Nav>
        {/* Logo */}
        <LogoBox to="/">
          <Logo src={logo} alt="LiteCode Logo" />
          <Brand>
            <Lite>Lite</Lite>
            <Code>Code</Code>
          </Brand>
        </LogoBox>

        {/* Desktop Menu */}
        <MenuWrap>
          <MenuItem to="/" end>Home</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/services">Services</MenuItem>
          <MenuItem to="/tech">Technology</MenuItem>
          <CTA to="/contact">Contact</CTA>
        </MenuWrap>

        {/* Mobile Button */}
        <MobileBtn onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </MobileBtn>
      </Nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <MobileDropdown>
          <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
          <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
          <MobileLink to="/services" onClick={() => setOpen(false)}>Services</MobileLink>
          <MobileLink to="/tech" onClick={() => setOpen(false)}>Technology</MobileLink>
          <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
        </MobileDropdown>
      )}
    </Header>
  );
};

export default Navbar;
