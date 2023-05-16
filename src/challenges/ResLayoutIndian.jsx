import { useState } from 'react';

const ResLayoutIndian = () => {
  const [isHidden, setIsHidden] = useState(false);
  // ✅ toggle button issue remains

  const handleOpen = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="h-screen w-full bg-gray-300">
      <header className="relative    md:text-lg">
        <nav className="relative z-30 flex w-full items-center justify-between border-2 border-b-gray-400 bg-orange-200 p-4">
          <span className="text-lg">Logo</span>

          <ul className="hidden w-full gap-[20px] rounded-b-2xl bg-orange-400 p-2  md:static md:flex md:w-auto md:items-center md:bg-transparent">
            <li className="w-min rounded-lg p-2">Home</li>
            <li className="w-min rounded-lg p-2">About</li>
            <li className="w-min rounded-lg p-2">Contact</li>
            <li className="w-min rounded-lg p-2">Help</li>
          </ul>

          <ul className="hidden items-center justify-between gap-[10px] md:flex">
            <li>Login</li>
            <li>Sign Up</li>
          </ul>

          <button
            onClick={handleOpen}
            className={`flex h-6 w-8 cursor-pointer flex-col justify-between transition-all duration-300 md:hidden ${
              isHidden && 'translate-y-1/2'
            }`}
          >
            <span
              className={`h-[4px] w-full  bg-gray-800  transition-all duration-300 ${
                isHidden && 'rotate-45  '
              }`}
            ></span>
            <span
              className={`h-[4px] w-full  bg-gray-800 transition-all duration-300 ${
                isHidden && '-rotate-45'
              } `}
            ></span>
            <span
              className={`${
                !isHidden
                  ? 'opacity-100 '
                  : 'opacity-0 transition-opacity duration-300'
              }   h-[4px] w-full  bg-gray-800 `}
            ></span>
          </button>
        </nav>

        <div
          className={`${
            isHidden ? ' grid-rows-[1fr]' : 'grid-rows-[0fr]'
          } z-10 grid w-full transition-all duration-300 md:hidden`}
        >
          <ul
            className={`${
              isHidden ? 'p-2' : ''
            } flex flex-col overflow-hidden rounded-b-2xl bg-orange-300 transition-all duration-300 `}
          >
            <li className="w-full cursor-pointer rounded-lg p-2 transition-all duration-300 hover:bg-pink-400 hover:text-white">
              Home
            </li>
            <li className="w-full cursor-pointer rounded-lg p-2 transition-all duration-300 hover:bg-pink-400 hover:text-white">
              About
            </li>
            <li className="w-full cursor-pointer rounded-lg p-2 transition-all duration-300 hover:bg-pink-400 hover:text-white">
              Contact
            </li>
            <li className="w-full cursor-pointer rounded-lg p-2 transition-all duration-300 hover:bg-pink-400 hover:text-white">
              Help
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default ResLayoutIndian;
