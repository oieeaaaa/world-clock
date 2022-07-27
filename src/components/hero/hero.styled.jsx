import styled from 'styled-components';

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 65px;
`;

export const StyledTimeZone = styled.span`
  color: ${props => props.theme.main};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const StyledTime = styled.h1`
  color: ${props => props.theme.main};
  font-size: 96px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledGreeting = styled.p`
  color: ${props => props.theme.main};
  font-size: 15px;
  font-weight: bold;
`;
