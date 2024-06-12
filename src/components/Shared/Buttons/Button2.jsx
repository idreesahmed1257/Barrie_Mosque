import { Button } from '@mui/material';
import React from 'react'
import styles from './buttons.module.scss';

const Button2 = ({ children, ...props }) => {
    return (
        <Button className={styles.button2} variant="outlined" {...props}>
            {children}
        </Button>
    );
};

export default Button2
