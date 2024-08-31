"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for the color
const ColorContext = createContext();

// Create a provider component
export const ColorProvider = ({ children }) => {
  // Load initial colors from localStorage or use default values
  const [color, setColor] = useState(() => localStorage.getItem('selectedColor') || "#00f500");
  const [colorSecond, setColorSecond] = useState(() => localStorage.getItem('selectedColorSecond') || "#0195d7");

  // Save colors to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('selectedColor', color);
  }, [color]);

  useEffect(() => {
    localStorage.setItem('selectedColorSecond', colorSecond);
  }, [colorSecond]);

  return (
    <ColorContext.Provider value={{ color, setColor, colorSecond, setColorSecond }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook to use the color context
export const useColor = () => useContext(ColorContext);
