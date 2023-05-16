import { useState } from 'react';
import ToggleSwitch from '../../components/Toggle';
import LimitlessCategory from './LimitlessCategory';
import { navbar } from './navbar';

const MainNav = () => {
  const [darkToggle, setDarkToggle] = useState(false);

  console.log(darkToggle);

  return (
    <div
      className={`m-2 h-full w-full bg-pink-300 p-4 transition-all duration-500 dark:bg-gray-800 ${
        darkToggle && 'dark'
      }`}
    >
      <nav className="rounded-sm bg-gray-300 p-4 transition-all duration-500 dark:bg-gray-700">
        <ul className="text-[20px]text-white  flex h-auto  w-1/2 flex-col justify-around rounded-lg bg-gray-400  p-4 transition-all duration-500 dark:bg-gray-600 dark:text-white">
          <LimitlessCategory menu={navbar} />
        </ul>
        <ToggleSwitch setDarkToggle={setDarkToggle} />
      </nav>
    </div>
  );
};

export default MainNav;
