import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Importa PropTypes
import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  margin-right: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #ccc;
  }
`;

const Navbar = ({ navItems }) => {
  return (
    <NavContainer>
      <NavList>
        {navItems.map((navItem, index) => (
          <NavItem key={index}>
            <NavLink to={navItem.to}>{navItem.label}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

// Define la validación de PropTypes para navItems
Navbar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Navbar;
