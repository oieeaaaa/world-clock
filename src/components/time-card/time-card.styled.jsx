import styled from 'styled-components';

export const StyledTimeCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: rgb(255 255 255 / 10%);
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const StyledCity = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.main};
  margin-bottom: 25px;
`;

export const StyledTime = styled.span`
  color: ${props => props.theme.main};
  font-size: 36px;
  font-weight: bold;
  margin-bottom: auto;
`;

export const StyledFooter = styled.div`
  text-align: center;
`;

export const StyledText = styled.p`
  color: ${props => props.theme.main};
  font-size: 14px;

  &:first-child {
    margin-bottom: 10px;
  }
`;

export const StyledTimeCardAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: rgb(255 255 255 / 10%);
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 20px;
  border: 1px solid ${props => props.theme.main};
  cursor: pointer;

  svg {
    width: 60px;
    height: 60px;
    color: ${props => props.theme.main};
  }
`

export const StyledTimeCardAddText = styled.p`
  color: ${props => props.theme.main};
  font-size: 16px;
  font-weight: bold;
  margin-top: 37px;
`

export const StyledRemoveBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  opacity: 0;
  transition: opacity .25s ease-in;
  cursor: pointer;

  svg {
    color: ${props => props.theme.main};
  }

  ${StyledTimeCard}:hover & {
    opacity: 1;
  }
`
