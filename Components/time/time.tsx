'use client'

import React, { useEffect } from 'react';

const JamTanggal: React.FC = () => {
  useEffect(() => {
    function showTime() {
      let time = new Date();
      const displayTime = document.querySelector(".display-time") as HTMLElement;
      displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
      setTimeout(showTime, 1000);
    }

    function updateDate() {
      let today = new Date();

      let dayName = today.getDay(),
        dayNum = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear();

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
      const dayWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const IDCollection = ["day", "daynum", "month", "year"];
      const val = [dayWeek[dayName], dayNum, months[month], year];
      for (let i = 0; i < IDCollection.length; i++) {
        const element = document.getElementById(IDCollection[i]) as HTMLElement;
        if (element.firstChild) {
          element.firstChild.nodeValue = val[i].toString();
        }
      }
    }

    showTime();
    updateDate();
  }, []);

  return (
    <div className="container">
      <style>
        {`
        //   html {
        //     font-size: 62.5%;
        //   }
          
        //   * {
        //     margin: 0;
        //     padding: 0;
        //     box-sizing: border-box;
        //   }
          
        //   body {
        //     font-family: "Lato", sans-serif;
        //     background: #272727;
        //     color: #ffd868;
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     height: 100vh;
        //   }
          
          .display-date {
            align-items: center;
            text-align: center;
            margin-bottom: 10px;
            font-size: 1.6rem;
            font-weight: 600;
          }
          
        //   .display-time {
        //     display: flex;
        //     font-size: 5rem;
        //     font-weight: bold;
        //     border: 2px solid #ffd868;
        //     padding: 10px 20px;
        //     border-radius: 5px;
        //     transition: ease-in-out 0.1s;
        //     transition-property: background, box-shadow, color;
        //     -webkit-box-reflect: below 2px linear-gradient(transparent, rgba(255, 255, 255, 0.05));
        //   }
          
          .display-time {
            background: #ffd868;
            box-shadow: 0 0 30px #ffd868;
            color: #272727;
            animation: rotate 1s linear infinite; /* Animasi rotasi pada hover */
          }
        `}
      </style>
      <div className="display-date">
        <span id="day">day</span>,
        <span id="daynum">00</span>
        <span id="month">month</span>
        <span id="year">0000</span>
      </div>
      <div className="display-time"></div>
    </div>
  );
};

export default JamTanggal;
