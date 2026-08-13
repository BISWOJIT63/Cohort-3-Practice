import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <nav className="bg-zinc-700 shadow-md rounded mb-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">User Manager</h1>

        <button onClick={()=>setToggle(prev=>!prev)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition">
          + Create User
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
