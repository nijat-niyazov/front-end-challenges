const Y = () => {
  return (
    <div className="container">
      <nav className="duration-600 ease-cubic w-96 rounded-lg border-2 border-white bg-white bg-opacity-70 shadow-lg backdrop-blur-lg backdrop-filter transition-all">
        <div className="brand flex items-center p-4">
          <p className="ml-4 font-medium text-gray-700">
            Good day,
            <span className="block text-2xl font-semibold italic text-gray-900">
              Hossein
            </span>
          </p>
        </div>

        <hr className="line my-8 h-0.5 rounded-full bg-gray-500" />

        <ul className="list">
          <li className="active flex cursor-pointer items-center rounded-md bg-blue-500 px-4 py-2">
            <i className="fas fa-home mr-4 text-lg text-white"></i>
            <span className="text-lg font-semibold text-white">Dashboard</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-md px-4 py-2 hover:bg-gray-300">
            <i className="fas fa-user mr-4 text-lg text-gray-500"></i>
            <span className="text-lg font-semibold text-gray-700">
              Accounts
            </span>
          </li>
          <li className="flex cursor-pointer items-center rounded-md px-4 py-2 hover:bg-gray-300">
            <i className="fas fa-box mr-4 text-lg text-gray-500"></i>
            <span className="text-lg font-semibold text-gray-700">Orders</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-md px-4 py-2 hover:bg-gray-300">
            <i className="fas fa-chart-simple mr-4 text-lg text-gray-500"></i>
            <span className="text-lg font-semibold text-gray-700">Charts</span>
          </li>
          <li className="flex cursor-pointer items-center rounded-md px-4 py-2 hover:bg-gray-300">
            <i className="fas fa-phone mr-4 text-lg text-gray-500"></i>
            <span className="text-lg font-semibold text-gray-700">Support</span>
          </li>

          <hr className="line my-8 h-0.5 rounded-full bg-gray-500" />

          <li className="flex cursor-pointer items-center rounded-md px-4 py-2 hover:bg-gray-300">
            <i className="fas fa-right-from-bracket mr-4 text-lg text-gray-500"></i>
            <span className="text-lg font-semibold text-gray-700">Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Y;
