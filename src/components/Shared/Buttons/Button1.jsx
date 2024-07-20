// src/components/Button.js
import React from 'react';
import styles from './buttons.module.scss';

const Button1 = ({ children, onClick }) => {
    return (
        <button className={styles.button1} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button1;
