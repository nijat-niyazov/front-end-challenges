import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { RxExit } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className="flex h-screen w-full items-center justify-start bg-gray-800">
      <nav className="h-content ml-2 flex w-[80px] flex-col items-start justify-between gap-[40px] rounded-[5px] bg-gray-500 p-4 text-white duration-500 ease-in-out hover:w-[200px]">
        <span className="">Nijat Niyazov</span>
        <hr className="w-full bg-gray-200" />

        <ul className="flex w-full flex-col justify-center gap-[20px] pb-10 text-[20px]">
          <li className="flex cursor-pointer items-center rounded-xl p-2 hover:bg-blue-400">
            <AiOutlineHome />
            <span className={`text-[18px] translate-x-[80px] `}>Home</span>
          </li>
          <li className="cursor-pointer rounded-xl p-2 duration-300 ease-in-out hover:bg-blue-400">
            <AiOutlineMail />
          </li>
          <li className="cursor-pointer rounded-xl p-2 duration-300 ease-in-out hover:bg-blue-400">
            <BsPersonCircle />
          </li>
        </ul>
        <RxExit />
      </nav>
    </div>
  );
};

export default Navbar;
