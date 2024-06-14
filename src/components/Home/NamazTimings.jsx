import React from 'react';
import styles from './home.module.scss';

const NamazTimings = ({ timings, currentDate }) => {
    return (
        <div className={styles.namazTimingsContainer}>
            <h2 className={styles.heading}>Namaz Timings</h2>
            <p className={styles.date}>{currentDate}</p> {/* Display the date */}
            <div className={styles.table}>
                <div className={styles.row}>
                    <div className={styles.cell}>Namaz</div>
                    <div className={styles.cell}>Begin Time</div>
                    <div className={styles.cell}>Iqama Time</div>
                </div>
                {timings.map((timing, index) => (
                    <div className={styles.row} key={index}>
                        <div className={styles.cell}>{timing.namaz}</div>
                        <div className={styles.cell}>{timing.beginTime}</div>
                        <div className={styles.cell}>{timing.iqamaTime}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NamazTimings;
