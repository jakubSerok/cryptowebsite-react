import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {error ? <p className="p-3 my-2 bg-red-300">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="relative w-full my-2 shadow-xl rounded-2xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border bg-primary border-input rounded-2xl"
                type="email"
              />
              <AiOutlineMail className="absolute text-gray-400 right-2 top-3" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="relative w-full my-2 shadow-xl rounded-2xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border bg-primary border-input rounded-2xl"
                type="password"
              />
              <AiFillLock className="absolute text-gray-400 right-2 top-3" />
            </div>
          </div>
          <button className="w-full p-3 my-2 shadow-xl bg-button text-btnText rounded-2xl">
            Sign up
          </button>
        </form>
        <p className="my-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-accent">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
