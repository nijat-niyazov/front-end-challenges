const ProtoTurk = () => {
  return (
    <div className="">
      <div className="h-1/2 w-1/2 bg-pink-400 p-4 text-white">Width Height</div>
      <div className=" max-h-[300px] min-w-[600px] max-w-[1000px] bg-pink-400 p-4 text-blue-200">
        Width& Width& Width& Width& Width& Width& Width& Width& Width& Width&
        Width& Width& Width& Width& Width& Width& Width& Width& Width& Width&
        Width& Width& Width& Width& Width& Width& Width&
      </div>
      <div className="h-[200px] w-[300px] bg-lime-300 p-4">
        <input
          type="text"
          className="rounded-xl border-[24px] border-solid border-red-400 p-3 outline-dashed outline-[12px] outline-offset-[10px] outline-green-400"
        />
      </div>
      <h2 className="p-4 text-center tracking-[10px] underline decoration-red-500 decoration-wavy decoration-4">
        Letter Spacing Letter SpacingLetter SpacingLetter SpacingLetter
        SpacingLetter SpacingLetter SpacingLetter SpacingLetter SpacingLetter
        SpacingLetter SpacingLetter Spacing{' '}
      </h2>
      <h2 className="p-2  indent-6 tracking-[10px]">
        Text indendt Text indendtText indendtText indendtText indendtText
        indendtText indendtText indendt{' '}
      </h2>

      <div className="flex whitespace-nowrap uppercase line-through">
        white space white space white SpacingLetter
        <span className="normal-case">
          spacing letter white space white space white SpacingLetter spacing
          letterwhite space
        </span>
        white space white SpacingLetter spacing letterwhite space white space
        white SpacingLetter spacing letter
      </div>

      <p className="m-2 w-10 break-words bg-gray-300 p-2">
        overflow overflow overflow overflow overflow overflow overflow
      </p>

      <div
        className="
      m-5 bg-red-400 p-5 text-center text-[70px] font-extrabold shadow-2xl"
      >
        <h3 className="">Text FOnt</h3>
      </div>
    </div>
  );
};

export default ProtoTurk;
