import { useRef } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonFill, BsListTask, BsWallet } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { IoIosHelpCircleOutline, IoMdExit } from 'react-icons/io';
import { SiSimpleanalytics } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const icons = [
  {
    icon: <AiOutlineHome />,
    info: 'Home',
  },
  {
    icon: <BsFillPersonFill />,
    info: 'Profile',
  },
  {
    icon: <BsWallet />,
    info: 'Wallet',
  },
  {
    icon: <SiSimpleanalytics />,
    info: 'Analytics',
  },
  {
    icon: <BsListTask />,
    info: 'Tasks',
  },
  {
    icon: <FiSettings />,
    info: 'Settings',
  },
  {
    icon: <IoIosHelpCircleOutline />,
    info: 'Help',
  },
];

const ResNavbar = () => {
  const navRef = useRef();

  return (
    <div className="h-screen w-full bg-gray-300 text-[18px]">
      <nav
        ref={navRef}
        className="flex h-screen w-[80px]  flex-col items-start gap-[40px]  overflow-hidden bg-white py-10 pl-2 text-black duration-300 ease-in-out hover:w-[200px]"
      >
        <span className="text-[24px]">Logo</span>

        <div className="flex h-full flex-col justify-between">
          <ul className="flex list-none flex-col gap-[20px] ">
            {icons.map((icon, i) => (
              <li key={i}>
                <NavLink
                  className="flex w-full cursor-pointer items-center justify-start gap-[40px] rounded-full  px-4  py-2 outline-none transition-colors duration-300 hover:bg-blue-400 hover:text-white 
                  "
                  to={`/` + icon.info.toLowerCase()}
                >
                  {icon.icon}
                  <span>{icon.info}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/"
            onClick={e => {
              e.preventDefault();
              setOpened(!opened);
            }}
          >
            <IoMdExit />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default ResNavbar;
