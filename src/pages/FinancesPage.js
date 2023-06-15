import { FinancesTableMain } from '../components/FinancesTableMain';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';

/**
 * A React component that displays the finances page.
 * It retrieves the finances from the Redux store and renders the FinancesTableMain component.
 * @returns {JSX.Element} The JSX element representing the finances page.
 */
export const FinancesPage = () => {
  // Get the finances from the Redux store using the useSelector hook
  const finances = useSelector((state) => state.finances);

  if (finances.length > 0) {
    // If there are finances, render the FinancesTableMain component
    return (
      <div className='container my-5'>
        <Card>
          <Card.Title className='p-3 text-start'>Finances</Card.Title>
          <Card.Body>
            <FinancesTableMain finances={finances} />
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    // If there are no finances, display a loading message
    return <div className='container my-5'><b>Loading finances...</b></div>;
  }
};
