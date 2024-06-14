import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import UserDetails from "./Components/Userdetails/UserDetails";
import AddUsers from "./Components/AddUser/AddUsers";
import UpdateUser from "./Components/UpdateUser/UpdateUser";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/addusers" element={<AddUsers />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/userdetails/:id" element={<UpdateUser />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
