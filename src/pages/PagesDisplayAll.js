import { ProjectsPage } from "./ProjectsPage"
import { useEffect } from 'react';
import { FinancesFetchAsync } from '../actions/FinanceAsyncLoader';
import { ProjectsFetchAsync } from '../actions/ProjectAsyncLoader';
import { useDispatch } from "react-redux";
import { FinancesPage } from "./FinancesPage";
import { useSelector } from "react-redux";
import { ProjectDetailPage } from "./ProjectsDetailPage";

export const PagesDisplayAll = () => {
    const dispatch = useDispatch();
    const projectDetail = useSelector((state) => state.display)
    
    useEffect(
        () => {
        dispatch(FinancesFetchAsync())
        dispatch(ProjectsFetchAsync())
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )
    
    if (projectDetail.display) {
        return (<ProjectDetailPage projectDetail={projectDetail}/>)
    }
    else {
        return (
            <>
                <ProjectsPage />
                <FinancesPage />
            </>
        )
    }
}