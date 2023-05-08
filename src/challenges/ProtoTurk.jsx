const ProtoTurk = () => {
  return (
    <div className="bg-gray-600">
      <div className="h-1/2 w-1/2 bg-pink-400 p-4 text-white">Width Height</div>
      <div className=" max-h-[300px] min-w-[600px] max-w-[1000px] bg-pink-400 p-4 text-blue-200">
        Width& Width& Width& Width& Width& Width& Width& Width& Width& Width&
        Width& Width& Width& Width& Width& Width& Width& Width& Width& Width&
        Width& Width& Width& Width& Width& Width& Width&
      </div>
      <div className="h-[200px] w-[300px] bg-lime-300 p-4">
        <input type="text" className="rounded-xl p-3 outline-green-400 outline-[12px] outline-dashed border-red-400 border-[24px] border-solid outline-offset-[40px]" />
      </div>
    </div>
  );
};

export default ProtoTurk;
