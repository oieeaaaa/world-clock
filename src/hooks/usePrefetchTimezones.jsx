import { useEffect, useState } from 'react';
import axios from 'axios';

// [] To prevent multiple fetch
// [] Prefetch timezones beforehand
// [] To optimize the 'allowedTimezones' that will be use later
const usePrefetchTimezones = (listOfTimezones) => {
  const [timezones, setTimezones] = useState({});

  useEffect(() => {
    const fetchTimezones = async () => {
      try {
        const requests = listOfTimezones.map(async timezone => {
          const [area, location] = timezone.toLowerCase().split('/');
          const { data } = await axios(`http://worldtimeapi.org/api/timezone/${area}/${location}`);

          return data;
        });

        let prefetchedTimezones = await Promise.all(requests);

        // convert to object so it's easier to access later
        prefetchedTimezones = prefetchedTimezones.reduce((acc, cur) => ({
          ...acc,
          [cur.timezone]: cur
        }), {});

        setTimezones(prefetchedTimezones);
      } catch(err) {
        console.error(new Error(err));
      }
    }

    fetchTimezones();
  }, [listOfTimezones]);

  return timezones;
}

export default usePrefetchTimezones;
