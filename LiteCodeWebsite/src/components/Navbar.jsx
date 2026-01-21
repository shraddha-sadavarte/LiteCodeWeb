import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { allowNavigation } from "../utils/navigationGuard";

/* ================= STYLES ================= */

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: background 0.35s ease, box-shadow 0.35s ease;
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(255,255,255,0.97)" : "#111827"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 6px 25px rgba(0,0,0,0.08)" : "none"};
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
  width: 46px;
  height: auto;
`;

const Brand = styled.span`
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
`;


const Lite = styled.span`
  color: #0ea5e9;
`;

const Code = styled.span`
  color: #fb923c;
  margin-left: 4px;
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
  color: ${({ $scrolled }) => ($scrolled ? "#0ea5e9" : "#e5e7eb")};
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
  padding: 0.6rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  color: white;
  text-decoration: none;
  background: #2563eb;
  transition: all 0.3s ease;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
  }
`;

const MobileBtn = styled.button`
  background: none;
  border: none;
  display: none;
  color: ${({ $scrolled }) => ($scrolled ? "#111827" : "#ffffff")};

  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 1rem;
  background: white;
  width: 230px;
  border-radius: 14px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Header $scrolled={scrolled}>
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
          <MenuItem to="/" onClick={allowNavigation} end $scrolled={scrolled}>Home</MenuItem>
          <MenuItem to="/about" onClick={allowNavigation} $scrolled={scrolled}>About</MenuItem>
          <MenuItem to="/services" onClick={allowNavigation} $scrolled={scrolled}>Services</MenuItem>
          <MenuItem to="/careers" onClick={allowNavigation} $scrolled={scrolled}>Careers</MenuItem>
          <CTA to="/contact" onClick={allowNavigation}>Contact</CTA>
        </MenuWrap>

        {/* Mobile Button */}
        <MobileBtn $scrolled={scrolled} onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </MobileBtn>
      </Nav>

      {/* Mobile Menu */}
      {open && (
        <MobileDropdown>
          <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
          <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
          <MobileLink to="/services" onClick={() => setOpen(false)}>Services</MobileLink>
          <MobileLink to="/careers" onClick={() => setOpen(false)}>Careers</MobileLink>
          <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
        </MobileDropdown>
      )}
    </Header>
  );
};

export default Navbar;
