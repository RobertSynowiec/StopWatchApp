import React, { useState, useRef, useEffect } from 'react';
import Button from '../Button/Button';
import FormatTime from '../FormatTime/FormatTime';
import styles from "./Timer.module.scss"

const Timer = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const interval = useRef(null);

    useEffect(() => {
        if (time === 0) {
            setRunning(false);
        }
    }, [time]);


    const startTimer = () => {
        if (!running) {
            setRunning(true);
            interval.current = setInterval(() => {
                setTime((time) => time + 1);
            }, 1);
        }
    };

    const stopTimer = () => {
        if (running) {
            clearInterval(interval.current);
            setRunning(false);
        }
    };

    const resetTimer = () => {
        clearInterval(interval.current);
        setTime(0);
    };

    return (
        <div>
            <p className={styles.component}>{FormatTime(time)}</p>
            <Button onClick={startTimer}>Start</Button>
            <Button onClick={stopTimer}>Stop</Button>
            <Button onClick={resetTimer}>Reset</Button>
        </div>
    );
}

export default Timer;