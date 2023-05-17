import { FinancesTable } from '../components/FinancesTable';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';


export const FinancesPage = () => {

    const finances = useSelector((state) => state.finances)

    return(
        <div className='container mt-5'>
            <Card>
                <Card.Title className='p-3 text-start'>Finances</Card.Title>
                <Card.Body>
                    <FinancesTable finances={finances}/>
                </Card.Body>
            </Card>
        </div>
    )
}
