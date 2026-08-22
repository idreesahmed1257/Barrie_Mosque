"use client";

import { Card, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { object } from 'yup';
import Button4 from '../Buttons/Button4';
import InputField from '../Forms/InputField';
import RecaptchaField from '../Forms/RecaptchaField';
import { useRecaptcha } from '../Forms/useRecaptcha';
import styles from '../InfoBox/info.module.scss';
import { YupContactSchema, formContactSchema } from './helper';

const ContactUsForm = ({ text, submitForm }) => {
    const {
        recaptchaRef,
        captchaToken,
        setCaptchaToken,
        resetCaptcha,
        handleCaptchaExpired,
        isCaptchaVerified,
        isCaptchaEnabled
    } = useRecaptcha();

    const contactUsSchema = object(YupContactSchema);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm(formContactSchema(contactUsSchema));

    const handleLoginSubmit = async (payload) => {
        if (isCaptchaEnabled && !captchaToken) {
            return;
        }

        try {
            await submitForm({
                ...payload,
                captchaToken
            });
        } finally {
            resetCaptcha();
        }
    };

    const isSubmitDisabled =
        !isValid || (isCaptchaEnabled && !isCaptchaVerified);

    return (
        <Grid
            xs={12}
            px={2}
            container
            className={styles.infoBox}
            justifyContent="center"
        >
            <Grid
                className={styles.formContainer}
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                container
                spacing={2}
                px={2}
                md={6}
                xs={12}
            >
                <br />

                <Card elevation={3} className={styles.contactCard}>
                    <Grid textAlign="center">
                        {text}
                    </Grid>

                    <br />

                    <form onSubmit={handleSubmit(handleLoginSubmit)}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name="name"
                                    placeHolder="Enter Name"
                                    label="Name"
                                    type="text"
                                    errorName={errors?.name}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name="email"
                                    placeHolder="Enter Email"
                                    label="Email"
                                    type="email"
                                    errorName={errors?.email}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name="phone"
                                    placeHolder="Phone Number"
                                    label="Phone Number"
                                    type="text"
                                    errorName={errors?.phone}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name="message"
                                    placeHolder="Enter Message"
                                    label="Message"
                                    type="text"
                                    errorName={errors?.message}
                                    multiline={true}
                                    rows={5}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <RecaptchaField
                                    recaptchaRef={recaptchaRef}
                                    onChange={setCaptchaToken}
                                    onExpired={handleCaptchaExpired}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                display="flex"
                                justifyContent="center"
                                sx={{ mt: 2, mb: 2 }}
                            >
                                <Button4
                                    type="submit"
                                    disabled={isSubmitDisabled}
                                >
                                    Send Message
                                </Button4>
                            </Grid>

                        </Grid>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ContactUsForm;
