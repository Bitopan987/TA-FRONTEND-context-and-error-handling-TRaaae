import React from 'react';
import { useContext } from 'react';
import { ModeContext } from './ModeContext';

export default function SwitchButton() {
  const mode = useContext(ModeContext);
  let isDarkMode = mode.data.isDarkMode;
  let changeMode = mode.changeMode;
  return (
    <button
      className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
      onClick={changeMode}
    >
      {mode.data.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
