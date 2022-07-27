import React from 'react';
import {
  StyledTimeCard,
  StyledCity,
  StyledTime,
  StyledFooter,
  StyledText,
  StyledTimeCardAdd,
  StyledTimeCardAddText,
  StyledRemoveBtn
} from './time-card.styled';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import { ReactComponent as X } from '../../assets/x.svg';
import { useLocalTimezone } from '../../contexts/useLocalTimezone';
import useLiveTime from '../../hooks/useLiveTime';
import formatTimezone from '../../utils/formatTimezone';

const TimeCard = ({
  label,
  timezone, 
  timezoneOffset, 
  timezoneAbbrv,
  onRemove,
}) => {
  const localTimezone = useLocalTimezone();
  const liveTime = useLiveTime(timezone);

  const timeDiffText = () => {
    // quick mafs
    let offsetInHours = (((localTimezone?.raw_offset - timezoneOffset) / 60) / 60);

    if (offsetInHours === 0) {
      return `Same time`;
    }

    if (offsetInHours < 0) {
      return `${Math.abs(offsetInHours)} hour/s ahead of ${formatTimezone(localTimezone?.timezone)}`;
    }

    offsetInHours -= 1; // need to remove the 1 hour discrepancy

    return `${offsetInHours} hour/s behind of ${formatTimezone(localTimezone?.timezone)}`;
  }

  return (
    <StyledTimeCard>
      <StyledRemoveBtn onClick={() => onRemove(timezone)}>
        <X />
      </StyledRemoveBtn>
      <StyledCity>{label}</StyledCity>
      <StyledTime>{liveTime}</StyledTime>
      <StyledFooter>
        <StyledText $md>{timezoneAbbrv}</StyledText>
        <StyledText>{timeDiffText()}</StyledText>
      </StyledFooter>
    </StyledTimeCard>
  );
};

export const TimeCardAdd = ({ onClick }) => (
  <StyledTimeCardAdd onClick={onClick}>
    <Clock />
    <StyledTimeCardAddText>
      Add Timezone
    </StyledTimeCardAddText>
  </StyledTimeCardAdd>
);

export default TimeCard;
