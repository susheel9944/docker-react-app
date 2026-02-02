import { useEffect, useState } from "react";
import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSave = (id) => {
    setEditRow(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-page">
      <h2>User Management</h2>
      <input
        placeholder="Search user..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((u) => (
            <tr key={u.id}>
              <td>
                {editRow === u.id ? (
                  <input
                    value={u.name}
                    onChange={(e) =>
                      setUsers(
                        users.map((user) =>
                          user.id === u.id
                            ? { ...user, name: e.target.value }
                            : user
                        )
                      )
                    }
                  />
                ) : (
                  u.name
                )}
              </td>
              <td>{u.email}</td>
              <td>{u.company.name}</td>
              <td>
                {editRow === u.id ? (
                  <button className="save-btn" onClick={() => handleSave(u.id)}>
                    Save
                  </button>
                ) : (
                  <button onClick={() => setEditRow(u.id)}>Edit</button>
                )}
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
