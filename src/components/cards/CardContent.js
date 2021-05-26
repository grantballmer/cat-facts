import React from "react";

const CardConent = ({ details, index }) => {
  const dateObj = new Date(details.createdAt);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const postDate = `
  ${days[dateObj.getDay()]}
  ${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
  return (
    <div className="card__content">
      <h2 className="heading">Cat Fact #{index + 1}</h2>
      <p className="post-date">{postDate}</p>
      <p>{details.text}</p>
    </div>
  );
};

export default CardConent;
