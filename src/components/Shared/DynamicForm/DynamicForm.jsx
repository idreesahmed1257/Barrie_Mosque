"use client";
import Button4 from "@/components/Shared/Buttons/Button4";
import { Card, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "../InfoBox/info.module.scss";
import DynamicFormField from "./DynamicFormField";
import { formDynamicSchema } from "./helper";

const DynamicForm = ({ text, formFields, handleSubmitForm }) => {
    const { control, handleSubmit, formState: { errors } } = useForm(formDynamicSchema(formFields));

    console.log("errors", errors)


    return (
        <Grid container justifyContent={"center"}>
            <Grid className={styles.formContainer} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} container spacing={2} px={2} xs={12} md={8}>
                <br />
                <Card elevation={3} className={styles.contactCard}>
                    <p className={styles.contactTitle}>{text}</p>
                    <br />
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <Grid container spacing={2}>
                            {formFields.map((field, index) => (
                                <DynamicFormField key={index} field={field} control={control} errors={errors} />
                            ))}

                            {/* Submit Button */}
                            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
                                <Grid item xs={4}>
                                    <Button4 type={"submit"}>Submit</Button4>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
};

export default DynamicForm;