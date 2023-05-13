import React, { useState } from 'react';

const Pricing = () => {
  const [toggle, setToggle] = useState(false);

  // ✅

  const data = [
    {
      name: 'Basic',
      price: 19.99,
      actions: ['500 GB STORAGE', '2 users Allowed', 'Send up to 3 GB'],
    },
    {
      name: 'Basic',
      price: 19.99,
      actions: ['500 GB STORAGE', '2 users Allowed', 'Send up to 3 GB'],
    },
    {
      name: 'Basic',
      price: 19.99,
      actions: ['500 GB STORAGE', '2 users Allowed', 'Send up to 3 GB'],
    },
  ];

  return (
    <div className="m-auto my-[20px]  h-screen w-[1200px] bg-gray-200    p-4 py-20 text-center">
      <section className="mb-[100px] font-semibold">
        <h1 className="mb-[10px] text-[30px]  text-gray-600">Our Pricing</h1>
        <div className="m-auto flex w-[200px] items-center justify-around gap-[20px]">
          <span>Annualy</span>
          <button
            onClick={() => setToggle(!toggle)}
            className={`relative h-[20px] w-[40px] rounded-[20px] duration-300 ease-out hover:opacity-50 ${
              toggle
                ? 'bg-purple-400'
                : 'bg-gradient-to-r from-indigo-500 via-indigo-700 to-violet-700'
            }`}
          >
            <span
              className={`ease-in-out'  absolute inset-0  top-[5%] h-[18px] w-[20px] rounded-full bg-white duration-300
              ${toggle ? 'left-[0%]' : 'left-[46%]'}
              
                
              `}
            ></span>
          </button>
          <span>Monthly</span>
        </div>
      </section>

      <section className="m-auto flex w-[920px] items-center justify-center ">
        {data.map((card, i) => {
          return (
            <article
              key={i}
              className={`grid place-items-center rounded-[5px] bg-white  text-gray-700 ${
                i === 1
                  ? 'h-[380px] w-[280px]  bg-gradient-to-r from-indigo-500 via-indigo-700 to-violet-700 text-sky-50'
                  : 'h-[350px] w-[300px] '
              }`}
            >
              <div className="flex h-[300px] w-[200px] flex-col justify-between font-bold">
                <h5>{card.name}</h5>

                <h2 className="flex items-center justify-center gap-[15px] text-[50px]">
                  <span className="text-[30px]">$</span>
                  {card.price}
                </h2>

                <div className="mb-4 flex flex-col gap-2 text-[14px] ">
                  <div className="h-[2px] w-[100%] bg-gray-200"></div>
                  {card.actions.map((action, i) => {
                    return (
                      <span key={i} className="px-auto ">
                        {action}
                        <div className="mt-[10px] h-[2px] w-[100%] bg-gray-200"></div>
                      </span>
                    );
                  })}
                </div>
                <button
                  className={`p-auto mx-auto w-[180px] rounded-[5px] border-[2px] border-transparent py-2 text-[12px] font-bold duration-300  ease-in-out hover:border-solid hover:bg-transparent   ${
                    i === 1
                      ? 'bg-white text-gray-600  hover:border-white hover:text-gray-100'
                      : 'bg-indigo-700 text-gray-100  hover:border-indigo-700 hover:text-gray-600'
                  }
                `}
                >
                  LEARN MORE
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Pricing;
