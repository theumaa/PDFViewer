import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddUser(props) {
  const { _id, name, gmail, age, address } = props.user;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5001/users/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/userdetails"));
  };

  return (
    <div>
      <h1>Add user Page</h1>
      <br></br>
      <h1>ID:{_id}</h1>
      <h1>Name:{name}</h1>
      <h1>Gmail:{gmail}</h1>
      <h1>Age:{age}</h1>
      <h1>Address:{address}</h1>
      <Link to={`/userdetails/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default AddUser;
