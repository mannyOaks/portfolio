import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb as faSolidLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeIconButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <div
      onClick={switchTheme}
      className="ml-6 items-center h-9 w-9 rounded-full flex border-2 border-transparent hover:border-white"
    >
      <FontAwesomeIcon
        icon={!theme || theme === 'light' ? faLightbulb : faSolidLightbulb}
        className="m-auto text-white text-xl no-select"
      />
    </div>
  );
};

export default ThemeIconButton;
