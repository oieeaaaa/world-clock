import React from 'react';
import { StyledHeader, StyledHeaderBrand } from './header.styled';

const Header = ({ title }) => (
  <StyledHeader>
    <StyledHeaderBrand>{title}</StyledHeaderBrand>
  </StyledHeader>
);

export default Header;
