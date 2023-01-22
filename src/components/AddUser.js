import React, { useState } from "react";
import "./AddUser.css";

const AddUser = ({ passData }) => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 0) {
      // any input is string , simple <0 would have also worked
      // but to be super safe we add a + infornt
      return;
    }
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
      <div className="inputrow">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
      </div>
      <div className="inputrow">
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setage(e.target.value)}
        ></input>
      </div>

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
