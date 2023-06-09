import { FinancesTable } from '../components/FinancesTable';
import { ShowSplitFinanceFormButton } from '../components/ShowSplitFinanceFormButton';
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FinancesFetchAsync } from '../actions/FinanceAsyncLoader';


export const FinancesPage = () => {
    const finances = useSelector((state) => state.finances)
    const dispatch = useDispatch();
    
    useEffect(
        () => {
        dispatch(FinancesFetchAsync())
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    return(
        <div className='container mt-5'>
            <Card>
                <Card.Title className='p-3 text-start'>Finances</Card.Title>
                <Card.Body>
                    <FinancesTable finances={finances}/>
                </Card.Body>
            </Card>

            <ShowSplitFinanceFormButton />
        </div>
    )
}
