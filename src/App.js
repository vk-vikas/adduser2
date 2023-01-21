import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [dataArray, setdataArray] = useState([]);

  const passData = (e) => {
    const arr1 = [...dataArray, e];
    setdataArray(arr1);
    console.log(arr1);
  };

  return (
    <div className="App">
      <AddUser passData={passData} />
      <UserList arr={dataArray} />
    </div>
  );
}

export default App;
