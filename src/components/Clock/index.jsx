import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

Clock.propTypes = {};

function formatDate(date) {
  if (!date) return;
  const hours = `0${date.getHours()}`.slice(-2);
  const minus = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minus}:${seconds}`;
}

function Clock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const setInterVal = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      clearInterval(setInterVal);
    };
  }, []);
  return (
    <div className="ui segment">
      <h1>TIME NOW:{timeString}</h1>
    </div>
  );
}

export default Clock;
