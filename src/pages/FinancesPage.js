import { FinancesTableMain } from '../components/FinancesTableMain';
import Card from "react-bootstrap/Card";

/**
 * A React component that displays the finances page.
 * @param {Object[]} finances - The array of finances.
 * @param {Object[]} projects - The array of projects.
 * @returns {JSX.Element} The JSX element representing the finances page.
 */
export const FinancesPage = ({finances, projects}) => {

  if (finances.length > 0) {
    // If there are finances, render the FinancesTableMain component
    return (
      <div className='container my-5'>
        <Card>
          <Card.Title className='p-3 text-start'>Finances</Card.Title>
          <Card.Body>
            <FinancesTableMain projects={projects} finances={finances} />
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    // If there are no finances, display a loading message
    return <div className='container my-5'><b>Loading finances...</b></div>;
  }
};
