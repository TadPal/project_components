import { ProjectsQuery }  from '../queries/ProjectsQuery';
import { useDispatch } from 'react-redux';
import { loadProjects } from '../features/projectsSlice';
import { useState } from 'react';

export const ProjectsLoader = () => {
  const dispatch = useDispatch();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

    const fetchData = async () => {
      try {
        const response = await ProjectsQuery();
        const data = await response.json();
        dispatch(loadProjects(data.data.projectPage));
        setIsDataLoaded(true);
      } catch (error) { 
        console.error('Error fetching group names:', error);
      }
    };

  return (
    <div>
      <button className="btn btn-sm btn-success my-1" onClick={fetchData} disabled={isDataLoaded}> {isDataLoaded ? 'Data Loaded' : 'Load Data'}</button>
    </div>
  );
}