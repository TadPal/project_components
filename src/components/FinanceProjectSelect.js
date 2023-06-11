import { useEffect, useState } from "react";

export const FinanceProjectSelect = ({ projects, onChange }) => {
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    // Call the onChange function with the selected type whenever it changes
    onChange(selectedProject);
  }, [selectedProject, onChange]);

  return (
    <select className="form-select form-select-sm" value={selectedProject} onChange={(e) => {setSelectedProject(e.target.value)}}>
      <option value="">All projects</option>
      {projects?.map((project) => (
        <option key={project.id} value={project.id}>
          {project.name}
        </option>
      ))}
    </select>
  );
};