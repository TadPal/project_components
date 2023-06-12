import { FinancesTableMain } from '../components/FinancesTableMain';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';

export const FinancesPage = () => {
    const finances = useSelector((state) => state.finances)

    if (finances.length > 0)
        return(
            <div className='container my-5'>
                <Card>
                    <Card.Title className='p-3 text-start'>Finances</Card.Title>
                    <Card.Body>
                        <FinancesTableMain finances={finances}/>
                    </Card.Body>
                </Card>
            </div>
    )
    else {
        return <div className='container my-5'><b>Loading finances...</b></div>
    }
}
