import { layout } from './layoutData';

const Challenge2 = () => {
  return (
    <>
      <section className=" place-items-strech  m-[30px]  grid  h-auto w-[1300px]  grid-cols-4     gap-x-[20px] gap-y-[30px] rounded-2xl border-2  border-solid bg-[#d5d9df] p-[20px] text-white">
        {layout.map((s, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col justify-between  gap-[10px] rounded-xl px-8 py-10 text-justify
              
              bg-[${s.bg}]  ${
                i === 0
                  ? 'col-span-2'
                  : i === 2
                  ? 'col-start-4 row-span-2 text-[#454c5a]'
                  : i === 3
                  ? ' text-[#454c5a]'
                  : i === 4 && 'col-span-2'
              } `}
            >
              <div className="">
                <h2 className="text-[30px]">{s.name}</h2>
                <h4 className="text-[20px] brightness-75">{s.job}</h4>
              </div>
              <span className="font-mono text-[20px] font-bold">{s.quote}</span>
              <p className="text-[15px] brightness-75">"{s.info}"</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Challenge2;
