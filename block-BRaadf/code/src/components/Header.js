import { useContext } from 'react';
import { ModeContext } from './ModeContext';

function Header() {
  const mode = useContext(ModeContext);
  let isDarkMode = mode.data.isDarkMode;
  return (
    <h1 className={`heading ${isDarkMode ? 'heading-dark' : 'heading-light'}`}>
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </h1>
  );
}

export default Header;
