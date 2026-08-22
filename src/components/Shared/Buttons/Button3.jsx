import { Button } from '@mui/material';
import React from 'react'
import styles from './buttons.module.scss';

const Button3 = ({ children, ...props }) => {
    return (
        <Button className={styles.button3} variant="outlined" {...props}>
            {children}
        </Button>
    );
};

export default Button3
