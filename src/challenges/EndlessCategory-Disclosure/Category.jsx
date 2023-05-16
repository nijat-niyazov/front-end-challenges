import { useState } from 'react';
import LimitlessCategory from './LimitlessCategory';

const Category = ({ item }) => {
  const [opened, setOpened] = useState(false);

  return (
    <li>
      <button
        disabled={!item.submenu}
        onClick={() => setOpened(opened ? false : true)}
        className={item.submenu && 'cursor-pointer'}
      >
        {item.title} {item.submenu ? (opened ? '🔽' : '▶') : ''}
      </button>
      {item.submenu && (
        <div
          className={`${
            opened ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          } grid w-full rounded-lg transition-all duration-300`}
        >
          <ul
            className={` ${
              opened ? 'px-2 ' : ''
            }  overflow-hidden transition-[padding]`}
          >
            <LimitlessCategory menu={item.submenu} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Category;
