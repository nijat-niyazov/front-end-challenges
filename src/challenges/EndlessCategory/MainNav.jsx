import LimitlessCategory from './LimitlessCategory';
import { navbar } from './navbar';

const MainNav = () => {
  return (
    <div className="m-2 h-full w-full bg-gray-800 p-4">
      <nav className="rounded-sm bg-gray-700 p-4">
        <ul className="flex h-auto w-1/2  flex-col justify-around rounded-lg bg-gray-500 p-4 text-[20px] text-white">
          <LimitlessCategory menu={navbar} />
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
