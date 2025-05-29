import React from "react";
import { Controller } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormHelperText,
} from "@mui/material";

const RHFRadioGroup = ({
    control,
    errors,
    name,
    label,
    options = [],
    row = false,
    disabled = false,
    required = false,
    onChange,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControl
                    error={!!(errors && errors?.[name]?.message)}
                    required={required}
                    component="fieldset"
                >
                    {label && <FormLabel component="legend">{label}</FormLabel>}
                    <RadioGroup
                        {...field}
                        row={row}
                        onChange={(e) => {
                            field.onChange(e.target.value); // Important: only pass value, not event
                            if (onChange) onChange(e.target.value);
                        }}
                    >
                        {options.map((option) => (
                            <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={<Radio disabled={disabled} color="primary" size="small" />}
                                label={option.label}
                            />
                        ))}
                    </RadioGroup>
                    <FormHelperText>
                        {errors && errors?.[name]?.message}
                    </FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default RHFRadioGroup;
