'use strict';
import React from 'react';

const WeatherDayLength = ({ sunrise, sunset }) => {
  const calcDayLength = () => {
    const [sunriseHours, sunriseMinutes] = sunrise.split(':');
    const [sunsetHours, sunsetMinutes] = sunset.split(':');

    const sunriseTime = new Date(
      2000,
      0,
      1,
      parseInt(sunriseHours),
      parseInt(sunriseMinutes)
    );
    const sunsetTime = new Date(
      2000,
      0,
      1,
      parseInt(sunsetHours),
      parseInt(sunsetMinutes)
    );

    const dayLengthInMinutes = (sunsetTime - sunriseTime) / (1000 * 60);

    const hours = Math.floor(dayLengthInMinutes / 60);
    const minutes = Math.floor(dayLengthInMinutes % 60);

    return ` ${hours} godzin ${minutes} minut`;
  };
  const divStyles = {
    border: '1px solid black',
    padding: '5px',
    margin: '5px',
    borderRadius: '4px',
    backgroundColor: '#e0e0e0',
  };
  return (
    <div style={divStyles}>
      <h3>Długość dnia</h3>
      <p>{calcDayLength()}</p>
    </div>
  );
};

export default WeatherDayLength;
