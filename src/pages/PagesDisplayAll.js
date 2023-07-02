import { ProjectsPage } from "./ProjectsPage"
import React, { useEffect, useState} from 'react';
import { FinancesFetchAsync } from '../actions/FinanceAsyncLoader';
import { ProjectsFetchAsync } from '../actions/ProjectAsyncLoader';
import { useDispatch } from "react-redux";
import { FinancesPage } from "./FinancesPage";
import { ProjectDetailPage } from "./ProjectsDetailPage";
import { useSelector } from "react-redux";

/**
 * A React component that displays multiple pages based on the application state.
 * It fetches finances and projects and renders the appropriate page based on the project detail display status.
 * @returns {JSX.Element} The JSX element representing the component.
 */
export const PagesDisplayAll = () => {
  const dispatch = useDispatch();
  const [projectDetail, setProjectDetail] = useState()
  const finances = useSelector((state) => state.finances)
  const projects = useSelector((state) => state.projects)
  
  useEffect(() => {
    // Fetch finances and projects when the component mounts
    dispatch(FinancesFetchAsync());
    dispatch(ProjectsFetchAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProjectDetail = (projectId) => {
    setProjectDetail(projectId);
  };
  
  if (projectDetail) {
    // If there is a project detail to display, render the ProjectDetailPage component
    return <ProjectDetailPage setProject={handleProjectDetail} projectDetail={projectDetail} projects={projects} finances={finances}/>;
  } else {
    // If there is no project detail to display, render the ProjectsPage and FinancesPage components
    return (
      <>
        <ProjectsPage projects={projects} setProject={handleProjectDetail}/>
        <FinancesPage projects={projects} finances={finances}/>
      </>
    );
  }
};
