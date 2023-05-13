import { StagesTable } from '../components/StagesTable';
import Card from "react-bootstrap/Card";
import { useSelector } from 'react-redux';


export const StagesPage = () => {

    const stages = useSelector((state) => state.stages)

    return(
        <div className='container my-2'>
            <Card>
                <Card.Title className='p-3 text-start'>Stages</Card.Title>
                <Card.Body>
                    <StagesTable stages={stages}/>
                </Card.Body>
            </Card>
        </div>
    )
}
