import { MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import forms from './forms.module.scss';
import { Controller } from 'react-hook-form';

const RHFSelect = ({ control, name, label, required, options, size = 'small', disabled = false }) => {
    return (
        <div className={forms.customTextField}>
            {label && (
                <Typography fontWeight={300}>
                    {label}{required && <span className={forms.estaric}>*</span>}
                </Typography>
            )}
            <Controller
                name={name}
                control={control}
                defaultValue="" // Set a default value
                render={({ field: { onChange, value, ref } }) => (
                    <Select
                        disabled={disabled}
                        value={value}
                        onChange={onChange}
                        inputRef={ref} // Register the ref
                        displayEmpty
                        size={size}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "left"
                            },
                            getContentAnchorEl: null
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                )}
            />
        </div>
    );
};

export default RHFSelect;
