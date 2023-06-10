import { ProjectsPage } from "./ProjectsPage"
import { useEffect } from 'react';
import { FinancesFetchAsync } from '../actions/FinanceAsyncLoader';
import { ProjectsFetchAsync } from '../actions/ProjectAsyncLoader';
import { useDispatch } from "react-redux";

export const PagesDisplayAll = () => {
    const dispatch = useDispatch();
    
    useEffect(
        () => {
        dispatch(FinancesFetchAsync())
        dispatch(ProjectsFetchAsync())
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    return (
            <ProjectsPage />
    )
}