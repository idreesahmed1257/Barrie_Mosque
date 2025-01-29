"use client"
import { Card, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { object } from 'yup';
import Button4 from '../Buttons/Button4';
import InputField from '../Forms/InputField';
import styles from '../InfoBox/info.module.scss';
import { YupContactSchema, formContactSchema } from './helper';

const ContactUsForm = ({ text, }) => {
    let contactUsSchema = object(YupContactSchema);
    const { control, handleSubmit, formState: { errors, isValid } } = useForm(formContactSchema(contactUsSchema))

    const handleLoginSubmit = (payload) => {
        console.log("payload", payload)
    };
    return (
        <Grid px={2} container className={styles.infoBox} justifyContent={'center'} spacing={2}>

            <Grid className={styles.formContainer} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} container spacing={2} px={4} xs={6}>
                <br />
                <Card elevation={3} className={styles.contactCard}>

                    <Grid textAlign={'center'}>
                        {text}
                    </Grid>
                    <br />
                    <form onSubmit={handleSubmit(handleLoginSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name={"name"}
                                    placeHolder={"Enter Name"}
                                    label={"Name"}
                                    type={"text"}
                                    errorName={errors?.name}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name={"email"}
                                    placeHolder={"Enter Email"}
                                    label={"Email"}
                                    type={"email"}
                                    errorName={errors?.email}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name={"phone"}
                                    placeHolder={"Phone Number"}
                                    label={"Phone Number"}
                                    type={"text"}
                                    errorName={errors?.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name={"message"}
                                    placeHolder={"Enter Message"}
                                    label={"Message"}
                                    type={"message"}
                                    errorName={errors?.message}
                                    multiline={true}
                                    rows={5}
                                />
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
                                <Grid item xs={4}>
                                    <Button4 type={"submit"} disabled={!isValid}>Send</Button4>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </Grid>
        </Grid>

    )
}

export default ContactUsForm
