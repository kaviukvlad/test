import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const LINKS = [
  { title: "Home", link: "/" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Shorts", link: "/shorts" },
  { title: "Services", link: "/services" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const NavWrapper = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 5.813rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  font-size: 1.375rem;
  font-weight: 500;
  color: #fff;
  transition: color 0.2s ease;

  &:hover {
    color: #0070f3;
  }
`;

export const Navigation: React.FC = () => {
  return (
    <NavWrapper>
      <NavList>
        {LINKS.map(({ title, link }, i) => (
          <NavItem key={i}>
            <NavLink to={link}>{title}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  );
};
