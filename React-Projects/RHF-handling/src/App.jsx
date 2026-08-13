import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Form from "./Form";

const App = () => {
  let [toggle, setToggle] = useState(true);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || [];
  });
  const handleDelete = (id) => {
    const arr = user.filter((u) => {
      return u.id !== id;
    });
    setUser(arr);
    localStorage.setItem("user", JSON.stringify(arr));
  };
  let [upadateData,setUpdatedData] = useState(); 
   
  const handleUpadte = (data) => {
    setToggle((prev) => !prev);
    setUpdatedData(data);
  };
  return (
    <div className="h-full p-4 bg-black ">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex flex-wrap gap-3">
          {user.map((u, idx) => (
            <Card
              key={u.id}
              u={u}
              handleDelete={handleDelete}
              handleUpadte={handleUpadte}
            />
          ))}
        </div>
      ) : (
        <Form setToggle={setToggle} user={user} setUser={setUser} upadateData={upadateData} />
      )}
    </div>
  );
};

export default App;
