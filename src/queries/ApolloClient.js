import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';


export const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:31180/ui/api/gql' }),
  cache: new InMemoryCache(),
});

const GET_PROJECTS = gql`
query {
    projectPage{
      id
      name
      lastchange
      startdate
      enddate
      projectType {
        id
      }
      milestones {
        id
      }
    }
  }
`;

export const ProjectPage = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.projectPage.map(project => (
        <div key={project.id}>
          <h3>{project.name}</h3>
        </div>
      ))}
    </div>
  );
}
