import { useState, useEffect } from 'react';

export const GetDate = () => {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getDate();
            if (now !== dateTime.getDate()) { setDateTime(new Date()) };
            console.log(now);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [dateTime]);

    return (dateTime.setHours(0,0,0,0))
}