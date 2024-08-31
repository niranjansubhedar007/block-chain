"use client"
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the color
const ColorContext = createContext();

// Create a provider component
export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#00f500"); // Default color
  const [colorSecond, setColorSecond] = useState("#0195d7"); // Default color

  return (
    <ColorContext.Provider value={{ color, setColor ,colorSecond, setColorSecond }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook to use the color context
export const useColor = () => useContext(ColorContext);

