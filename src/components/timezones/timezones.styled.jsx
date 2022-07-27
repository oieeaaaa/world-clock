import styled from 'styled-components';
import { StyledTimeCard } from '../time-card/time-card.styled';

export const StyledTimezones = styled.div``;

export const StyledTimezoneList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 35px;
  padding-left: 120px;
  padding-right: 120px;

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    padding-left: 60px;
    padding-right: 60px;

    > ${StyledTimeCard}:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
