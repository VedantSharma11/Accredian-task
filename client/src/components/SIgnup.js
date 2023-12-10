import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SIgnup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    c_password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, username, password, c_password } = formData;

    if (!username || !password || !email) {
      alert("Username, email, and password are required");
      return;
    }

    if (password !== c_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        email,
        username,
        password,
        c_password,
      });

      console.log(response.data);
      alert("User registered successfully!");
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        alert("Registration failed. Please try again.");
      } else {
        console.error("Server Error:", error.message);
        alert("Server error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="container mx-auto p-8 flex">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-4xl text-center mb-12 font-bold">Signup </h1>
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="p-8 shadow-lg">
            <form method="POST" className="mb-3">
              <div className="mb-5">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Username
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
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email
                </label>

                <input
                  type="text"
                  name="email"
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
                  type="password"
                  name="password"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="c_password"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  onChange={handleChange}
                />
              </div>
              <button
                className="w-full p-3 mt-4 bg-black text-white rounded shadow"
                onClick={handleSubmit}
              >
                Signup
              </button>
            </form>
            <div className="flex justify-center gap-3">
                <Link to="/">
                  {" "}
                  <p className="hover:underline cursor-pointer">Home</p>
                </Link>
                <Link to="/login">
                  {" "}
                  <p className="hover:underline cursor-pointer">Login</p>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnup;
