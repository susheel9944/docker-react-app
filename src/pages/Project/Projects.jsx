// pages/Projects.jsx
import { useState } from "react";
import { initialProjects } from "../../data/projects";
import "./projects.css";

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [form, setForm] = useState({ name: "", desc: "", status: "" });
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    setProjects([...projects, { ...form, id: Date.now() }]);
    setForm({ name: "", desc: "", status: "" });
  };

  const handleSave = (id) => {
    setEditId(null);
  };

  return (
    <div className="projects-page">
      <h2>Project Management</h2>

      <div className="project-form">
        <input
          placeholder="Project Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
        <input
          placeholder="Status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        />
        <button onClick={handleSubmit}>Create</button>
      </div>

      <table>
        <tbody>
          {projects.map((item) => (
            <tr key={item.id}>
              <td>
                {editId === item.id ? (
                  <input
                    value={item.name}
                    onChange={(e) =>
                      setProjects(
                        projects.map((obj) =>
                          obj.id === item.id
                            ? { ...obj, name: e.target.value }
                            : obj
                        )
                      )
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>{item.desc}</td>
              <td>{item.status}</td>
              <td>
                {editId === item.id ? (
                  <button
                    className="save-btn"
                    onClick={() => handleSave(item.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button onClick={() => setEditId(item.id)}>Edit</button>
                )}
                <button
                  onClick={() =>
                    setProjects(
                      projects.filter((item1) => item1.id !== item.id)
                    )
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
