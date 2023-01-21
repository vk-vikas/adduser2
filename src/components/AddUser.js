import React, { useState } from "react";
import "./AddUser.css";

const AddUser = ({passData}) => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    const data = {
      name: name,
      age: age,
      id: Math.random() * 1000,
    };
    setname("");
    setage("");
    // console.log(data);
    passData(data);
  };

 

  return (
    <form onSubmit={submitHandler} className="form">
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      ></input>
      <label>Age</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setage(e.target.value)}
      ></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
