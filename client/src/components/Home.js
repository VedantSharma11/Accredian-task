import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-400 rounded-md p-10">
        <h1 className="text-2xl font-semibold mb-3">
          Welcome, You can now test the application.


          
        </h1>
        <div className="flex justify-center gap-5 font-semibold">
          <Link to="/login">
            <button className="bg-black rounded-md px-4 py-1 text-white">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-black rounded-md text-white px-4 py-1">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
