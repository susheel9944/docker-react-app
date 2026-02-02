import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <aside className="sidebar">
      <h2 className="logo">My Dashboard</h2>

      <nav>
        <NavLink to="/dashboard" className="menu">
          Dashboard{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>New</span>
        </NavLink>
        <NavLink to="/users" className="menu">
          Users
        </NavLink>
        <NavLink to="/projects" className="menu">
          Projects
        </NavLink>
      </nav>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
