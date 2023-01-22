import React, { useState } from "react";
import "./AddUser.css";
import ErrorModal from "./ErrorModal";

const AddUser = ({ passData }) => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [error, seterror] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      seterror({
        title: "Error",
        message: "Enter data (non emoty fields)",
      });
      return;
    }
    if (+age < 0) {
      // any input is string , simple <0 would have also worked
      // but to be super safe we add a + infornt
      seterror({
        title: "Error",
        message: "Enter valid age (>0)",
      });
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

  const handleError = () => {
    seterror(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleError={handleError}
        />
      )}
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
    </div>
  );
};

export default AddUser;
