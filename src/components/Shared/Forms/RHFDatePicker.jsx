import React from "react";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl, FormHelperText, Typography } from "@mui/material";
import forms from "./forms.module.scss";

const RHFDatePicker = ({ control, name, label, errors, required = false, disabled = false }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControl error={!!errors?.[name]?.message} required={required} fullWidth>

                    {label && (
                        <Typography fontWeight={300}>
                            {label}{required && <span className={forms.estaric}>*</span>}
                        </Typography>
                    )}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{
                                textField: {
                                    size: "small",
                                    className: disabled ? forms.disabledInput : "",
                                },
                            }}
                            value={field.value || null}
                            disabled={disabled}
                            onChange={(newValue) => field.onChange(newValue)}
                        />
                    </LocalizationProvider>

                    {errors?.[name] && (
                        <FormHelperText>{errors[name].message}</FormHelperText>
                    )}
                </FormControl>
            )}
        />
    );
};

export default RHFDatePicker;
