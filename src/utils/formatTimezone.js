const formatTimezone = (tz) => {
  if (!tz) return false;

  return tz.split('/')[1].replaceAll('_', ' ');
}

export default formatTimezone;
