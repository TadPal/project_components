import { ProjectUpdate } from '../queries/ProjectUpdate';

/**
 * A React component that represents a button for updating projects.
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element} The JSX element representing the projects updater button.
 */
export const ProjectsUpdater = (props) => {
  
  /**
   * Fetches the project update and logs the response.
   * @returns {Promise} A promise representing the asynchronous operation.
   */
  const fetchData = async () => {
    try {
      const response = await ProjectUpdate(props);
      const data = await response.json();
      console.log(data.data.projectUpdate.msg);
    } catch (error) { 
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-sm btn-success my-1" onClick={fetchData}>Project Update</button>
    </div>
  );
}
