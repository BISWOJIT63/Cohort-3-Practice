import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/Profile";

const App = () => {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    image: "",
    email: "",
    password: "",
  });
  const [toggle, setToggle] = useState(false);
  const changeHandler = (e) => {
    const { name, value  } = e.target;
    setFormData(prev=>({
      ...prev,
      [name]: value ,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    console.log(formData)
    setToggle(true);
    setFormData({
      id: "",
      name: "",
      image: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      {toggle?<Profile user={user} />:<RegisterForm
        user={user}
        setUser={setUser}
        changeHandler={changeHandler}
        handleSubmit={handleSubmit}
        formData={formData}
      />}
    </div>
  );
};

export default App;
