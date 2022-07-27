import styled from 'styled-components';

export const StyledTimezoneForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 80%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform .25s linear;
`;

export const StyledForm = styled.form`
  width: 350px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 30px;
`;

export const StyledLabelText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StyledLabelTextEm = styled.em``;

export const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid white;
  border-radius: 3px;
  font-size: 16px;
  padding: 10px 20px;
  background: transparent;
  color: white;

  option {
    color: black;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid white;
  border-radius: 3px;
  font-size: 16px;
  padding: 10px 20px;
  background: transparent;
  color: white;
`;

export const StyledButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: white;
  width: 100%;
  height: 40px;
  color: black;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Montserrat';
  border-radius: 5px;
  border: none;
  margin-top: 50px;
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: transparent;
  border: none;

  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`
