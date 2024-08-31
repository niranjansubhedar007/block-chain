// import Mainpage from "./mainPage/page";
// import Navbar from "./navbar/page";

// export default function Home() {
//   return <>
//   <Navbar/>
//   <Mainpage/>
//   </>;
// }

import React from "react";

import { ColorProvider } from "@/ColorContext";

import Loginpage from "./loginPage/page";
import Mainpage from "./mainPage/page";
import Navbar from "./navbar/page";

const App = () => {
  return (
    <ColorProvider>
      <Loginpage />
    
    </ColorProvider>
  );
};

export default App;




// "use client";
// import { ColorProvider, useColor } from "@/ColorContext";
// import {
//   faArrowRotateBack,
//   faArrowsRotate,
//   faArrowTrendUp,
//   faDollar,
//   faMoneyBillTransfer,
//   faRecycle,
//   faUser,
//   faUserGroup,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect, useState } from "react";

// const Mainpage = () => {
//   const { color, setColor } = useColor();
//   const [inputColor, setInputColor] = useState(color);

//   const { colorSecond, setColorSecond } = useColor();
//   const [inputColorSecond, setInputColorSecond] = useState(colorSecond);


//   const handleColorChange = () => {
//     setColor(inputColor);
//   };

//   const handleColorChangeSecond = () => {
//     setColorSecond(inputColorSecond);
//   };
//   useEffect(() => {
//     setInputColor(color);
//     setInputColorSecond(colorSecond);
//   }, [color, colorSecond]);

//   return (
//     <>
//       <div
//         className="min-h-screen lg:px-32 md:px-5 px-4 pt-4 mx-auto w-full"
//         style={{ backgroundColor: "#000000" }}
//       >
//         <div className="flex w-full">
//           <p className="text-white lg:text-2xl md:text-xl text-base">
//             PLATFORM STATS
//           </p>

//           <button
//             onClick={handleColorChange}
//             className="text-white  ml-4 align-middle px-2 justify-center  md:mt-1 mt-0 lg:pt-0  text-center border flex lg:text-base md:text-base text-base"
//             style={{
//               borderColor: color,
//               borderWidth: "1px",
//               backgroundColor: `${color}70`,
//             }}
//           >
//             <FontAwesomeIcon icon={faArrowsRotate} className="mr-2 mt-1 w-4 h-4" />
//             Change Color
//           </button>
//           <input
//             type="color"
//             value={inputColor}
//             onChange={(e) => setInputColor(e.target.value)}
//             className="ml-4 mt-1"
//           />

//           <button
//           onClick={handleColorChangeSecond}
//           className="text-white  ml-4 align-middle px-2 justify-center  md:mt-1 mt-0 lg:pt-0  text-center border flex lg:text-base md:text-base text-base"
//           style={{
//             borderColor: colorSecond,
//             borderWidth: "1px",
//             backgroundColor: `${colorSecond}70`,
//           }}
//         >
//           <FontAwesomeIcon icon={faArrowsRotate} className="mr-2 mt-1 w-4 h-4" />
//          Second Change Color
//         </button>
//         <input
//           type="color"
//           value={inputColorSecond}
//           onChange={(e) => setInputColorSecond(e.target.value)}
//           className="ml-4 mt-1"
//         />
//         </div>

//         <div className="w-full grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-5 mt-4">
//           <div className="align-middle col-span-52 md:col-span-1 flex items-center gap-x-3 md:gap-x-6 p-2 md:p-4 rounded-lg border md:border-2 border-[#00f5001c] bg-gradient-to-b from-[rgb(20,32,51)] to-black">
//             <FontAwesomeIcon
//               icon={faArrowTrendUp}
//               className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
//               style={{ color: color }}
//             />
//             <div className="lg:ml-3 md:ml-2 ml-1">
//               <p
//                 className="lg:text-sm md:text-sm text-xs font-sm bg-clip-text text-transparent"
//                 style={{ color: "white" }}
//               >
//                 Total Volume
//               </p>
//               <p
//                 className="lg:text-xl md:text-xl text-base font-light bg-clip-text text-transparent"
//                 style={{
//                   backgroundImage: `linear-gradient(to right, ${colorSecond}, ${color})`,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 0 USDT
//               </p>
//             </div>
//           </div>

//           <div className="align-middle col-span-52 md:col-span-1 flex items-center gap-x-3 md:gap-x-6 p-2 md:p-4 rounded-lg border md:border-2 border-[#00f5001c] bg-gradient-to-b from-[rgb(20,32,51)] to-black">
//             <FontAwesomeIcon
//               icon={faDollar}
//               className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
//               style={{ color: color }}
//             />
//             <div className="lg:ml-3 md:ml-2 ml-1">
//               <p
//                 className="lg:text-sm md:text-sm text-xs font-sm bg-clip-text text-transparent"
//                 style={{ color: "white" }}
//               >
//                 Total Profit
//               </p>
//               <p
//                 className="lg:text-xl md:text-xl text-base font-light bg-clip-text text-transparent"
//                 style={{
//                   backgroundImage: `linear-gradient(to right, ${colorSecond}, ${color})`,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 0 USDT
//               </p>
//             </div>
//           </div>

//           <div className="align-middle col-span-52 md:col-span-1 flex items-center gap-x-3 md:gap-x-6 p-2 md:p-4 rounded-lg border md:border-2 border-[#00f5001c] bg-gradient-to-b from-[rgb(20,32,51)] to-black">
//             <FontAwesomeIcon
//               icon={faUserGroup}
//               className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
//               style={{ color: color }}
//             />
//             <div className="lg:ml-3 md:ml-2 ml-1">
//               <p
//                 className="lg:text-sm md:text-sm text-xs font-sm bg-clip-text text-transparent"
//                 style={{ color: "white" }}
//               >
//                 Total User
//               </p>
//               <p
//                 className="lg:text-xl md:text-xl text-base font-light bg-clip-text text-transparent"
//                 style={{
//                   backgroundImage: `linear-gradient(to right, ${colorSecond}, ${color})`,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 0
//               </p>
//             </div>
//           </div>

//           <div className="align-middle col-span-52 md:col-span-1 flex items-center gap-x-3 md:gap-x-6 p-2 md:p-4 rounded-lg border md:border-2 border-[#00f5001c] bg-gradient-to-b from-[rgb(20,32,51)] to-black">
//             <FontAwesomeIcon
//               icon={faMoneyBillTransfer}
//               className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
//               style={{ color: color }}
//             />
//             <div className="lg:ml-3 md:ml-2 ml-1">
//               <p
//                 className="lg:text-sm md:text-sm text-xs font-sm bg-clip-text text-transparent"
//                 style={{ color: "white" }}
//               >
//                 Transactions
//               </p>
//               <p
//                 className="lg:text-xl md:text-xl text-base font-light bg-clip-text text-transparent"
//                 style={{
//                   backgroundImage: `linear-gradient(to right, ${colorSecond}, ${color})`,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 1,648,312
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="w-full grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-5 mt-6">
//           <div className="align-middle col-span-52 md:col-span-1 flex items-center gap-x-3 md:gap-x-6 p-2 md:p-4 rounded-lg border md:border-2 border-[#00f5001c] bg-gradient-to-b from-[rgb(20,32,51)] to-black">
//             <div className="ml-3 flex justify-around w-full">
//               <div>
//                 <button
//                   className="px-5 rounded py-3 lg:text-xl md:text-base text-xs text-white"
//                   style={{
//                     borderColor: color,
//                     borderWidth: "1px",
//                   }}
//                 >
//                   Optimize Gas Fee
//                 </button>
//               </div>
//               <div>
//                 <button
//                   className="px-5 py-3 lg:text-xl md:text-base text-xs text-white rounded font-semibold ml-4"
//                   style={{
//                     backgroundImage: `linear-gradient(to right, ${colorSecond}, ${color})`,
//                     borderColor: color,
//                   }}
//                 >
//                   Auto Transaction
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div
//             className="align-middle col-span-52 md:col-span-1 items-center gap-x-3 md:gap-x-6 p-2 md:p-4 rounded-lg border md:border-2 border-[#00f5001c] bg-gradient-to-b from-[rgb(20,32,51)] to-black"

//           >
//             <p className="justify-center flex lg:text-xl md:text-base text-xs mb-3 text-white">
//               USER STATS
//             </p>
//             <div className="lg:ml-3 md:ml-2 ml-0 flex justify-around w-full">
//               <div className="flex flex-col">
//                 <p
//                   className="lg:text-xl md:text-base text-base font-light bg-clip-text text-transparent"
//                   style={{
//                     backgroundImage: `linear-gradient(to right, ${colorSecond}, ${color})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   0 USDT
//                 </p>
//                 <p className="text-white lg:text-sm md:text-sm text-xs">
//                   Total Profit
//                 </p>
//               </div>
//               <div className="flex flex-col">
//                 <p
//                   className="lg:text-xl md:text-base text-base font-light bg-clip-text text-transparent"
//                   style={{
//                     backgroundImage: `linear-gradient(to right, ${colorSecond}, ${color})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   -1 USDT
//                 </p>
//                 <p className="text-white lg:text-sm md:text-sm text-xs">
//                   Profit Ceiling
//                 </p>
//               </div>
//               <div className="flex flex-col">
//                 <p
//                   className="lg:text-xl md:text-base text-base font-light bg-clip-text text-transparent"
//                   style={{
//                     backgroundImage: `linear-gradient(to right, ${colorSecond}, ${color})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   0 USDT
//                 </p>
//                 <p className="text-white lg:text-sm md:text-sm text-xs">
//                   Limit Left
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="font-light w-full mt-6 overflow-x-auto">
//             <table
//               className="min-w-full text-gray-50 font-light lg:text-sm md:text-sm text-xs"
//               style={{
//                 borderWidth: "1px",
//                 borderColor: color,
//               }}
//             >
//               <thead>
//                 <tr
//                   className="text-left font-light p-3"
//                   style={{
//                     borderWidth: "1px",
//                     borderColor: color,
//                   }}
//                 >
//                   <th className="py-2 px-4 font-light">Block Time</th>
//                   <th className="py-2 px-4 font-light">From</th>
//                   <th className="py-2 px-4 font-light">From Amount</th>
//                   <th className="py-2 px-4 font-light">To</th>
//                   <th className="py-2 px-4 font-light">To Amount</th>
//                   <th className="py-2 px-4 font-light">Transaction Hash</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Sample data row */}
//                 <tr className=""></tr>
//                 {/* Repeat <tr> for more rows */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Mainpage;







// "use client";
// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Create a Context for the color
// const ColorContext = createContext();

// // Create a provider component
// export const ColorProvider = ({ children }) => {
//   const [color, setColor] = useState(null); // Initialize with null
//   const [colorSecond, setColorSecond] = useState(null); // Initialize with null

//   useEffect(() => {
//     // Check if window is defined (browser environment)
//     if (typeof window !== "undefined") {
//       const storedColor = localStorage.getItem('selectedColor');
//       const storedColorSecond = localStorage.getItem('selectedColorSecond');

//       // If stored values are found, update the state
//       setColor(storedColor || "#00f500"); // Use stored value or default
//       setColorSecond(storedColorSecond || "#0195d7"); // Use stored value or default
//     }
//   }, []);

//   useEffect(() => {
//     if (color !== null) {
//       localStorage.setItem('selectedColor', color);
//     }
//   }, [color]);

//   useEffect(() => {
//     if (colorSecond !== null) {
//       localStorage.setItem('selectedColorSecond', colorSecond);
//     }
//   }, [colorSecond]);

//   return (
//     <ColorContext.Provider value={{ color, setColor, colorSecond, setColorSecond }}>
//       {children}
//     </ColorContext.Provider>
//   );
// };

// // Custom hook to use the color context
// export const useColor = () => useContext(ColorContext);
