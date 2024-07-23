"use client"
import { Card, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { object } from 'yup';
import InputField from '../Shared/Forms/InputField';
import styles from '../Shared/InfoBox/info.module.scss';
import { YupBusinessSchema, formBusinessSchema } from './helper';
import Button4 from '../Shared/Buttons/Button4';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddBusiness = ({ text, setBusinesses }) => {
    let businessSchema = object(YupBusinessSchema);
    const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm(formBusinessSchema(businessSchema))

    const handleBusinessSubmit = async (payload) => {
        try {
            const resp = await axios.post('/api/business/add-business', payload);
            console.log("resp", resp)
            setBusinesses(prevState => [
                ...prevState,
                resp?.data?.data
            ]);
            toast.success("Business Added Sucessfully")
            reset()

        } catch (err) {
            console.log("err", err)
        }
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
                    <form onSubmit={handleSubmit(handleBusinessSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name={"name"}
                                    placeHolder={"Enter Business Name"}
                                    label={"Business Name"}
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
                                    placeHolder={"Enter Phone"}
                                    label={"Phone Number"}
                                    type={"text"}
                                    errorName={errors?.phone}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name={"website"}
                                    placeHolder={"Enter Website"}
                                    label={"Website"}
                                    type={"text"}
                                    errorName={errors?.website}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name={"details"}
                                    placeHolder={"Enter Details"}
                                    label={"Details"}
                                    type={"text"}
                                    errorName={errors?.details}
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

export default AddBusiness
