import { useState, useEffect } from 'react';

export const GetDate = (props) => {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDateTime(new Date()), 60000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (dateTime.setHours(0,0,0,0))
}