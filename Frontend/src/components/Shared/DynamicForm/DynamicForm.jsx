"use client";
import Button4 from "@/components/Shared/Buttons/Button4";
import RecaptchaField from "@/components/Shared/Forms/RecaptchaField";
import { useRecaptcha } from "@/components/Shared/Forms/useRecaptcha";
import { Card, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "../InfoBox/info.module.scss";
import DynamicFormField from "./DynamicFormField";
import { formDynamicSchema } from "./helper";

const DynamicForm = ({ text, formFields, handleSubmitForm }) => {
    const { recaptchaRef, captchaToken, setCaptchaToken, resetCaptcha, handleCaptchaExpired, isCaptchaVerified, isCaptchaEnabled } = useRecaptcha();
    const { control, handleSubmit, formState: { errors } } = useForm(formDynamicSchema(formFields));

    const onSubmit = (payload) => {
        if (isCaptchaEnabled && !captchaToken) {
            return;
        }

        handleSubmitForm({ ...payload, captchaToken });
        resetCaptcha();
    };

    const isSubmitDisabled = isCaptchaEnabled && !isCaptchaVerified;

    return (
        <Grid container justifyContent={"center"}>
            <Grid className={styles.formContainer} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} container spacing={2} px={2} xs={12} md={8}>
                <br />
                <Card elevation={3} className={styles.contactCard}>
                    <p className={styles.contactTitle}>{text}</p>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            {formFields.map((field, index) => (
                                <DynamicFormField key={index} field={field} control={control} errors={errors} />
                            ))}

                            <RecaptchaField
                                recaptchaRef={recaptchaRef}
                                onChange={setCaptchaToken}
                                onExpired={handleCaptchaExpired}
                            />

                            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
                                <Grid item xs={4}>
                                    <Button4 type={"submit"} disabled={isSubmitDisabled}>Submit</Button4>
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
