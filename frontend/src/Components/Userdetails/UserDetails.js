import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Users from "../Users/AddUser";
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5001/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function UserDetails() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "User Report",
    onafterprint: () => alert("Users  report download successfully !!"),
  });

  return (
    <div>
      <Navbar />
      <h1>User Details Page</h1>
      <div ref={ComponentsRef}>
        {users &&
          users.map((user, i) => (
            <div key={i}>
              <Users user={user} />
            </div>
          ))}
      </div>
      <button onClick={handlePrint}>Download PDF</button>
    </div>
  );
}

export default UserDetails;
