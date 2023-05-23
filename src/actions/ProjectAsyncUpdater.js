import { ProjectsUpdateMutation }  from '../queries/ProjectsUpdateMutation';

export const ProjectsUpdater = (props) => {

    const fetchData = async () => {
      try {
        const response = await ProjectsUpdateMutation(props);
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