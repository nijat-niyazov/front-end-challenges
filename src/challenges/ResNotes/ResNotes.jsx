const ResNotes = () => {
  const nav =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nesciunt iusto a quisquam, sapiente numquam in, labore modi maiores aliquam facere? Est a culpa repellat non magnam id quibusdam dignissimos.';

  return (
    <div className="h-screen w-full bg-pink-200">
      <div className="m-auto w-[90%] bg-blue-300 p-4  outline-4 outline-pink-200">
        <h2 className="mb-10 text-center text-3xl">Responsive Notes</h2>
        {/* 
        <img
          src="https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
          alt="tailwind"
          className="h-[500px] w-full border-4 border-green-700 object-cover"
        /> */}
        <ul className="flex flex-wrap content-start items-center justify-center gap-[10px] overflow-hidden border-4 border-pink-400 p-4">
          {nav.split(' ').map((word, i) => {
            return (
              <li
                className="border-2 border-black bg-blue-600 p-2  text-white "
                key={i}
              >
                {word}
              </li>
            );
          })}
        </ul>
        <ul className="grid-cols-auto-fit grid min-w-[22rem] content-start items-center justify-center gap-[10px] overflow-hidden border-4 border-pink-400 p-4">
          {nav.split(' ').map((word, i) => {
            return (
              <li
                className="border-2 border-black bg-blue-600 p-2  text-white "
                key={i}
              >
                {word}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResNotes;
