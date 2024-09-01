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
"use client"
import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#000000');
  const [colorSecond, setColorSecond] = useState('#ffffff');

  return (
    <ColorContext.Provider value={{ color, setColor, colorSecond, setColorSecond }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
