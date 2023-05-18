import { ProjectsPage } from "./ProjectsPage"
import { StagesPage } from "./StagesPage"
import { ProjectPage } from "../queries/ApolloClient"

export const PagesDisplayAll = () => {
    return (
        <>
            <ProjectsPage />
            <StagesPage />
            <ProjectPage />
        </>
    )
}