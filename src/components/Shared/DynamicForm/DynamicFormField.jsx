"use client";

import { Grid } from "@mui/material";
import CustomTextField from "../Forms/CustomTextField";
import RHFSelect from "../Forms/RHFSelect";
import RHFCheckBox from "../Forms/RHFCheckBox";
import RHFDatePicker from "../Forms/RHFDatePicker";


const DynamicFormField = ({ field, control, errors }) => {
    switch (field.type) {
        case "text":
            return (
                <Grid item xs={12} md={6}>
                    <CustomTextField
                        control={control}
                        errors={errors}
                        name={field.name}
                        type="text"
                        label={field.label}
                        required={field.required || false}
                        placeHolder={field.placeholder || ""}
                    />
                </Grid>
            );

        case "select":
            return (
                <Grid item xs={12} md={6}>
                    <RHFSelect
                        control={control}
                        name={field.name}
                        label={field.label}
                        options={field.options || []}
                    />
                </Grid>
            );

        case "checkbox":
            return (
                <Grid item xs={12} md={6}>
                    <RHFCheckBox
                        control={control}
                        errors={errors}
                        name={field.name}
                        label={field.label}
                    />
                </Grid>
            );

        case "date":
            return (<Grid item xs={12} md={6}>
                <RHFDatePicker
                    control={control}
                    errors={errors}
                    name={field.name}
                    label={field.label}
                />
            </Grid>)
        default:
            return null;
    }
};

export default DynamicFormField