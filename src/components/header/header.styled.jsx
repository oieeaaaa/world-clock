import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 30px;
  padding-bottom: 105px;
  display: flex;
  justify-content: center;
`;

export const StyledHeaderBrand = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: ${props => props.theme.main};
`;
