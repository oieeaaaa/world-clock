import styled from 'styled-components';

export const StyledApp = styled.div`
  background-image: url(${props => 
    props.$dayShift === 'morning' 
    ? '/day.jpg' 
    : props.$dayShift === 'noon' 
    ? '/noon.jpg'
    : '/night.jpg'});
  background-size: cover;
  height: 100%;
  min-height: 100vh;
`;
