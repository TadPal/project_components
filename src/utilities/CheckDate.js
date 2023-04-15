import { useState, useEffect } from 'react';

/**
* Summary: Check every minute for a date change.
*
* @returns {Date} Current date
*/
export const CheckDate = () => {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getDate();
            if (now !== dateTime.getDate()) { setDateTime(new Date()) };
            console.log(now);
        }, 60000);

        return () => {
            clearInterval(interval);
        }
    }, [dateTime]);

    return (dateTime.setHours(0,0,0,0))
}