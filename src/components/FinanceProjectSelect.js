import { useEffect, useState } from "react";
import React from "react";

/**
 * A React component that renders a dropdown select menu for selecting a finance project.
 * @param {Object[]} props.projects - An array of project objects.
 * @param {Function} props.onChange - A function to be called when the selected project changes.
 */
export const FinanceProjectSelect = ({ projects, onChange }) => {
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    // Call the onChange function with the selected project whenever it changes
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
