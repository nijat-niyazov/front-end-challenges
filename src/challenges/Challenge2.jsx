const Challenge2 = () => {
  // bg = #0c111f
  // cards = #1a1d43
  // main = #4e3fd2
  // textActive = #d5d1e4
  // textnonActive = #b1ace5
  //green = #4e5189
  //orange = #e57d5a
  //blue = #4daecf
  //benovse = #6630bc
  //red = #e45470
  //yellow = #d8b352

  return (
    <div className="  flex h-screen w-full items-center justify-center bg-[#0c111f] text-white">
      <section className="grid  h-[200px] w-[500px] grid-cols-4 grid-rows-2 gap-[10px]">
        <article className="row-span-2 flex flex-col rounded-[10px] bg-[#4e3fd2] p-4">
          <div>
            <aside className="h-10 w-10 rounded-full border-solid border-sky-500">
              C
            </aside>

            <div className="flex h-auto w-5 flex-col">
              <span className="text-[#b1ace5]">Report for</span>
              <h2 className="text-[#d5d1e4]">Jeremy Robson</h2>
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-[#1a1d43] p-6">
            <p>Daily</p>
            <p>Weekly</p>
            <p>Montly</p>
          </div>
        </article>

        <article>
          
        </article>
      </section>
    </div>
  );
};

export default Challenge2;
