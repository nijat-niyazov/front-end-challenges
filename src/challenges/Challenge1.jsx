const Challenge1 = () => {
  const string = 'world';

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-[450px] rounded-3xl bg-[#272e39] font-sans">
        <div className="flex flex-col gap-8 p-8 ">
          <aside className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a353f]">
            <span className="text-xl">⭐</span>
          </aside>

          <h2 className="text-3xl font-semibold text-white">How did we do?</h2>
          <article className="text-sm text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            recusandae dolore esse eveniet libero ipsa sed vel nam, itaque nihil
            vero saepe optio incidunt reprehenderit ex corrupti dolor quisquam
            fugiat.
          </article>

          <section className="flex w-full items-center justify-between text-white">
            {Array.from(string).map((num, i) => {
              i++;
              return (
                <article
                  key={num}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a353f] text-gray-300 "
                >
                  {i}
                </article>
              );
            })}
          </section>

          <button
            type="button"
            className="text-m rounded-full bg-orange-500 py-3 font-semibold tracking-widest text-gray-100"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge1;
