const getDayShift = (hours) => {
  return hours < 12 ? 'morning' : hours < 18 ? 'afternoon' : 'evening';
}

export default getDayShift;
