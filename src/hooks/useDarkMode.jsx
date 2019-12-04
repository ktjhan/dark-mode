import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

// set up state property
// capture the values
// if local data use that, else use initial data
// update localStorage when needed
// Don't forget to parse data from localStorage, and stringify new data getting stored
const useDarkMode = (key, initialValues) => {
  const [darkmode, setDarkMode] = useLocalStorage(key, initialValues);

  useEffect(() => {

    const checkValue = () => {
      if (darkmode === true) {
        document.querySelector("body").classList.add('dark-mode');
      }
      else {
        document.querySelector("body").classList.remove('dark-mode');
      }
    }
    return checkValue
  }, [darkmode])

  return [darkmode, setDarkMode]

}

export default useDarkMode;
