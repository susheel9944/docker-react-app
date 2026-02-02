import "./dashboard.css";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="card">Total Users Today: {users.length}</div>
        <div className="card">Total Projects: {10}</div>
      </div>
    </div>
  );
};

export default Dashboard;
