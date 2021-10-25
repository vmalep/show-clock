import { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString('it-IT'));

    console.log("newDate = " + date)

    useEffect(() => {
        console.log("setting up interval")
        setInterval(function () { setDate(new Date().toLocaleTimeString('fr-FR')); }, 1000);
        return () => {
            console.log("clearing interval")
            clearInterval(setDate())
        }
    }, []);

    return (
        <>
            {date && <p>{date}</p>}
        </>
    );
};

export default Clock;