import { useState, useEffect } from 'react';

/**
 * Check every minute for a date change and return the current date.
 *
 * @returns {Date} The current date.
 */
export const CheckDate = () => {
    // Initialize state variable for current date and time
    const [dateTime, setDateTime] = useState(new Date());

    // Update the date every minute and return the date without time
    useEffect(() => {
        // Create an interval that runs every minute
        const interval = setInterval(() => {
            // Get the current date
            const now = new Date().getDate();
            // If the current date is different than the stored date, update the state
            if (now !== dateTime.getDate()) {
                setDateTime(new Date());
            }
        }, 60000);

        // Clear the interval on unmount
        return () => {
            clearInterval(interval);
        }
    }, [dateTime]);

    // Return the current date without time
    return (dateTime.setHours(0, 0, 0, 0));
}