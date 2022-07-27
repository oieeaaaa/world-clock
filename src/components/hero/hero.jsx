import React  from 'react';
import { 
  StyledHero, 
  StyledTimeZone, 
  StyledTime,
  StyledGreeting
} from './hero.styled';
import useLiveTime from '../../hooks/useLiveTime';
import formatTimezone from '../../utils/formatTimezone';
import { useLocalTimezone } from '../../contexts/useLocalTimezone';

const Hero = ({ dayShift }) => {
  const localTimezone = useLocalTimezone();
  const liveTime = useLiveTime(localTimezone?.timezone);

  const getGreeting = () => {
    if (!liveTime) return '';

    return `Good ${dayShift}`;
  };

  return (
    <StyledHero>
      <StyledTimeZone>{formatTimezone(localTimezone?.timezone)}</StyledTimeZone>
      <StyledTime>{liveTime}</StyledTime>
      <StyledGreeting>{getGreeting()}</StyledGreeting>
    </StyledHero>
  )
};

export default Hero;
