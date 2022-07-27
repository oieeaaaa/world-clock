import React, { useEffect, useState } from 'react';
import { StyledApp } from './app.styled';
import Header from '../header';
import Hero from '../hero';
import Timezones from '../timezones';
import getDayShift from '../../utils/getDayShift';
import { useLocalTimezone } from '../../contexts/useLocalTimezone';
import { useTheme } from '../../contexts/useTheme';

function App() {
  const localTimezone = useLocalTimezone();
  const theme = useTheme();
  const [dayShift, setDayShift] = useState(null);

  useEffect(() => {
    if (!localTimezone || !theme.updateTheme) return;

    const time = new Date(localTimezone.datetime).toLocaleTimeString('en-US', { hour12: false });
    const hours = Number(time.split(':')[0]);

    // These variable below controls the mood. :)

    // const newDayShift = 'morning';
    // const newDayShift = 'noon';
    // const newDayShift = 'evening';

    const newDayShift = getDayShift(hours); // morning, noon, evening

    setDayShift(newDayShift);
    theme.updateTheme(newDayShift);
  }, [localTimezone, theme]);

  return (
    <StyledApp $dayShift={dayShift}>
      <Header title="World Clock" />
      <Hero dayShift={dayShift} />
      <Timezones />
    </StyledApp>
  );
}

export default App;
