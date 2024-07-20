import { Button } from '@mui/material';
import React from 'react'
import styles from './buttons.module.scss';

const Button4 = ({ children, ...props }) => {
    return (
        <Button className={styles.button4} variant="outlined" {...props}>
            {children}
        </Button>
    );
};

export default Button4
