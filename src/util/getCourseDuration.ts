const getCourseDuration = (duration: number) => {
  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration % 60;

  const formattedHours = durationHours < 10 ? `0${durationHours}` : durationHours.toString();
  const formattedMinutes =
    durationMinutes < 10 ? `0${durationMinutes}` : durationMinutes.toString();

  const hoursLabel = durationHours === 1 ? 'hour' : 'hours';

  return `${formattedHours}:${formattedMinutes} ${hoursLabel}`;
};

export default getCourseDuration;
