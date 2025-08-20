import { FormControl, FormHelperText, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const InputField = ({
  control,
  errors,
  name,
  placeHolder,
  label,
  type,
  disabled = false,
  multiline = false,
  rows
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          error={!!(errors && errors[name] && errors[name].message)}
          fullWidth
        >
          <TextField
            label={label}
            placeholder={placeHolder}
            variant="outlined"
            disabled={disabled}
            fullWidth
            size="small"
            {...field}
            type={type}
            multiline={multiline}
            rows={rows}
          />
          <FormHelperText>
            {errors && errors[name] && errors[name].message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default InputField;
