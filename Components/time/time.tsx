// 'use client'

// import React, { useEffect } from 'react';

// function animation(span: HTMLElement) {
//   span.className = "turn";
//   setTimeout(function () {
//     span.className = ""
//   }, 700);
// }

// const JamDigital: React.FC = () => {
//   useEffect(() => {
//     const jamInterval = setInterval(() => {
//       const waktu = new Date();
//       const jam = document.getElementById('jam') as HTMLDivElement;

//       let hours = waktu.getHours().toString();
//       let minutes = waktu.getMinutes().toString();
//       let seconds = waktu.getSeconds().toString();

//       if (waktu.getHours() < 10) {
//         hours = '0' + waktu.getHours();
//       }
//       if (waktu.getMinutes() < 10) {
//         minutes = '0' + waktu.getMinutes();
//       }
//       if (waktu.getSeconds() < 10) {
//         seconds = '0' + waktu.getSeconds();
//       }
//       jam.innerHTML = '<span>' + hours + '</span>'
//         + '<span>' + minutes + '</span>'
//         + '<span>' + seconds + '</span>';

//       const spans = jam.getElementsByTagName('span') as HTMLCollectionOf<HTMLElement>;
//       animation(spans[2]);
//       if (seconds === '00') animation(spans[1]);
//       if (minutes === '00' && seconds === '00') animation(spans[0]);
//     }, 1000);

//     return () => {
//       clearInterval(jamInterval);
//     };
//   }, []);

//   return (
//     <div className="jam-digital">
//       <style>
//         {`
//         .jam-digital {
//           width: 50%;
//           margin: 50% 50%;
//         }
//         #jam span {
//           float: left;
//           text-align: center;
//           font-size: 70px;
//           margin: 0 2.5%;
//           padding: 20px;
//           width: 25%;
//           border-radius: 10px;
//           box-sizing: border-box;
//         }
//         #jam span:nth-child(1) {
//           background: #a70c0c;
//         }
//         #jam span:nth-child(2) {
//           background: #f6ab29;
//         }
//         #jam span:nth-child(3) {
//           background: #298f19;
//         }
//         #jam::after {
//           content: "";
//           display: block;
//           clear: both;
//         }
//         #unit span {
//           float: left;
//           width: 20%;
//           margin-top: 30px;
//           text-align: center;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           font-size: 18px;
//           text-shadow: 1px 1px 1px rgba(10, 10, 10, 0.7);
//         }
//         span.turn {
//           animation: turn 0.7s ease;
//         }
//         @keyframes turn {
//           0% {transform: rotateX(0deg)}
//           100% {transform: rotateX(360deg)}
//         }
//         @media screen and (max-width: 980px){
//           #jam span {
//             float: left;
//             text-align: center;
//             font-size: 50px;
//             margin: 0 1.5%;
//             padding: 20px;
//             width: 20%;
//           }
//           h1 {
//             margin: 20px 5%;
//           }
//           .jam-digital {
//             width: 100%;
//             margin: 10% 20%;
//           }
//           #unit span {
//             width: 23%;
//           }
//         }
//         `}
//       </style>
//       <h1>Jam Digital</h1>
//       <div id="jam"></div>
//       <div id="unit">
//         <span>Jam</span>
//         <span>Menit</span>
//         <span>Detik</span>
//       </div>
//     </div>
//   );
// };

// export default JamDigital;

