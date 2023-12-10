import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (!username || !password) {
      alert("Username And  password are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });

      console.log(response.data);
      alert("User Login successfully!");
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        alert("Login failed. Please try again.");
      } else {
        console.error("Server Error:", error.message);
        alert("Server error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl text-center mb-12 font-thin">Login </h1>
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="p-8 shadow-lg">
              <form method="POST" className="mb-3">
                <div className="mb-5">
                  <label
                    for="username"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>

                  <input
                    type="text"
                    name="username"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="w-full p-3 mt-4 bg-black text-white rounded shadow"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </form>
              <div className="flex justify-center gap-3">
                <Link to="/">
                  {" "}
                  <p className="hover:underline cursor-pointer">Home</p>
                </Link>
                <Link to="/signup">
                  {" "}
                  <p className="hover:underline cursor-pointer">Register</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
