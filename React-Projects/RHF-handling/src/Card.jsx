import React from "react";

const Card = ({ u,handleDelete,handleUpadte }) => {
  return (
    <div>
      <div className="w-60  p-2 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
        <img src={u.url} alt="User" className="w-full h-60 object-cover" />

        <div className="p-5 space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">{u.name}</h2>

          <p className="text-gray-600"> {u.email}</p>

          <p className="text-gray-600">{u.mobile}</p>
        </div>
        <div className="flex justify-between ">
          <button onClick={()=> handleUpadte(u)} className="px-2 py-1 bg-amber-400 rounded">Upadte</button>
          <button onClick={()=>handleDelete(u.id)} className="px-2 py-1 bg-red-500 rounded">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
