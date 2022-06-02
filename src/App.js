import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserData from "./components/UserData";

function App() {
  const [savedData, setSavedData] = useState([]);
  const saveDataHandler = (userData) => {
    setSavedData((prevUsers) => {
      return [...prevUsers, userData];
    });
  };
  const deleteUser = (id) => {
    setSavedData(savedData.filter((savedData) => savedData.id !== id))
  }
  return (
    <div className="App">
      <Navbar />
      <UserForm onSaveUserData={saveDataHandler} />
      <UserData datas={savedData} onDeleteUser={deleteUser} />
    </div>
  );
}

export default App;
