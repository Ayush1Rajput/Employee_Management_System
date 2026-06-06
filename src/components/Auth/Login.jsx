import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submit");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col  items-center justify-center"
        >
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}  
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }} 
            className="border-2 border-emerald-600 rounded-full py-3 px-5 mt-3 text-xl outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
            required
          />
          <button className="border-none bg-emerald-600 text-lg rounded-full py-2 px-8 w-full  outline-none m-5 placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
