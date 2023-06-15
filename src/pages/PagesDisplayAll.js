import { ProjectsPage } from "./ProjectsPage"
import { useEffect } from 'react';
import { FinancesFetchAsync } from '../actions/FinanceAsyncLoader';
import { ProjectsFetchAsync } from '../actions/ProjectAsyncLoader';
import { useDispatch } from "react-redux";
import { FinancesPage } from "./FinancesPage";
import { useSelector } from "react-redux";
import { ProjectDetailPage } from "./ProjectsDetailPage";

/**
 * A React component that displays multiple pages based on the application state.
 * It fetches finances and projects and renders the appropriate page based on the project detail display status.
 * @returns {JSX.Element} The JSX element representing the component.
 */
export const PagesDisplayAll = () => {
  const dispatch = useDispatch();
  const projectDetail = useSelector((state) => state.display);
  
  useEffect(() => {
    // Fetch finances and projects when the component mounts
    dispatch(FinancesFetchAsync());
    dispatch(ProjectsFetchAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (projectDetail.display) {
    // If there is a project detail to display, render the ProjectDetailPage component
    return <ProjectDetailPage projectDetail={projectDetail} />;
  } else {
    // If there is no project detail to display, render the ProjectsPage and FinancesPage components
    return (
      <>
        <ProjectsPage />
        <FinancesPage />
      </>
    );
  }
};
