import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormControlLabel, Checkbox, FormHelperText } from "@mui/material";

const RHFCheckBox = ({
    control,
    errors,
    name,
    label,
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
                    error={!!(errors && errors?.[name] && errors?.[name].message)}
                    required={required}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...field}
                                checked={field.value || false} // Ensure field.value is a boolean
                                disabled={disabled}
                                color="primary"
                                size="small"
                                onChange={(e) => {
                                    field.onChange(e); // Call the default onChange from react-hook-form
                                    if (onChange) onChange(e); // Call custom onChange if provided
                                }}
                            />
                        }
                        label={label}
                    />
                    <FormHelperText>
                        {errors && errors?.[name] && errors?.[name].message}
                    </FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default RHFCheckBox;
