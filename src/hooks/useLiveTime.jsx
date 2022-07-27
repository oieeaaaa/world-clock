import { useState, useEffect } from 'react';

const useLiveTime = (timezone) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (!timezone) return;

    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString('en-US', { timeZone: timezone, hour12: false });

      setTime(newTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [timezone]);

  return time;
}

export default useLiveTime;
