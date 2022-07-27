import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const LocalTimeZoneContext = React.createContext({});

export const useLocalTimezone = () => {
  const localTimezone = useContext(LocalTimeZoneContext);

  return localTimezone;
}

export const LocalTimeZoneProvider = ({ children }) => {
  const [timezone, setTimezone] = useState(null);

  // get the local timezone
  useEffect(() => {
    const getTimeZone = async () => {
      try {
        const res = await axios.get("https://worldtimeapi.org/api/ip");

        setTimezone(res.data);
      } catch (err) {
        console.error(new Error(err));
      }
    }

    getTimeZone();
  }, []);

  return (
    <LocalTimeZoneContext.Provider value={timezone}>
      {children}
    </LocalTimeZoneContext.Provider>
  );
}
