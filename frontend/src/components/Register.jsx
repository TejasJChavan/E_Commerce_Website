import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    if (!user.password) {
      setError("Password cannot be empty!");
    } else if (!user.email) {
      setError("Email cannot be empty!");
    } else {
      try {
        const response = await fetch("http://localhost:8080/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        if (response.status === 400) {
          setError(data.error);
        } else if (response.status === 201) {
          navigate("/login");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      } catch (err) {
        setError("Could not reach servers. Please try again later.")
      }
    }
  }

  function onChange(e) {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-1 flex items-center justify-center px-3">
        <form
          onSubmit={onSubmit}
          className="bg-2 px-10 py-10 rounded-2xl flex flex-col grow shrink max-w-xl"
        >
          <div className="text-center mb-8 text-4xl">Register</div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <label className="font-medium">Email</label>
          <input
            onChange={onChange}
            name="email"
            placeholder="Enter Email"
            className="w-full border-2 p-3 rounded-lg my-3"
          ></input>
          <label className="font-medium">Password</label>
          <input
            onChange={onChange}
            name="password"
            placeholder="Enter Password"
            type="password"
            className="w-full border-2 p-3 rounded-lg my-3"
          ></input>
          <button className="w-full p-3 bg-5 rounded-2xl my-3 text-white hover:scale-[1.02] transition-all active:scale-[0.99]">
            Register
          </button>

          <div className="my-2 place-self-center">
            Have an account?{" "}
            <span
              className="text-3 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log In
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
