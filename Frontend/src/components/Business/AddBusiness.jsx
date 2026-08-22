"use client"
import { Card, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { object } from 'yup';
import InputField from '../Shared/Forms/InputField';
import RecaptchaField from '../Shared/Forms/RecaptchaField';
import { useRecaptcha } from '../Shared/Forms/useRecaptcha';
import styles from '../Shared/InfoBox/info.module.scss';
import { YupBusinessSchema, formBusinessSchema } from './helper';
import Button4 from '../Shared/Buttons/Button4';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FormControl, InputLabel, MenuItem, Select, FormHelperText, Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import apiInterceptor from '@/lib/api';
import { useState } from 'react';

const categoryOptions = [
    { label: "Agriculture & Farming", value: "Agriculture & Farming" },
    { label: "Arts & Entertainment", value: "Arts & Entertainment" },
    { label: "Automotive", value: "Automotive" },
    { label: "Beauty & Personal Care", value: "Beauty & Personal Care" },
    { label: "Childcare & Daycare", value: "Childcare & Daycare" },
    { label: "Cleaning Services", value: "Cleaning Services" },
    { label: "Construction & Renovation", value: "Construction & Renovation" },
    { label: "Education & Training", value: "Education & Training" },
    { label: "Events & Wedding Services", value: "Events & Wedding Services" },
    { label: "Healthcare & Wellness", value: "Healthcare & Wellness" },
    { label: "Home & Garden", value: "Home & Garden" },
    { label: "Hospitality & Tourism", value: "Hospitality & Tourism" },
    { label: "Legal & Financial Services", value: "Legal & Financial Services" },
    { label: "Manufacturing", value: "Manufacturing" },
    { label: "Media & Communications", value: "Media & Communications" },
    { label: "Non-Profit & Community Services", value: "Non-Profit & Community Services" },
    { label: "Pet Services", value: "Pet Services" },
    { label: "Printing & Publishing", value: "Printing & Publishing" },
    { label: "Real Estate", value: "Real Estate" },
    { label: "Restaurant & Food Services", value: "Restaurant & Food Services" },
    { label: "Retail", value: "Retail" },
    { label: "Service", value: "Service" },
    { label: "Sports & Recreation", value: "Sports & Recreation" },
    { label: "Technology & IT Services", value: "Technology & IT Services" },
    { label: "Transportation & Logistics", value: "Transportation & Logistics" },
    { label: "Other", value: "Other" },
];



const AddBusiness = ({ text, setBusinesses }) => {
    const { recaptchaRef, captchaToken, setCaptchaToken, resetCaptcha, handleCaptchaExpired, isCaptchaVerified, isCaptchaEnabled } = useRecaptcha();
    let businessSchema = object(YupBusinessSchema);
    const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm(formBusinessSchema(businessSchema))
    const [hasMasjidConnection, setHasMasjidConnection] = useState(false);

    const handleBusinessSubmit = async (payload) => {
        if (isCaptchaEnabled && !captchaToken) {
            return;
        }

        if (hasMasjidConnection && !payload?.masjidConnection) {
            toast.error('Please select your connection type.');
            return;
        }

        const finalPayload = {
            ...payload,
            captchaToken,
        };
        if (!hasMasjidConnection) {
            delete finalPayload.masjidConnection;
        }

        try {
            await toast.promise(
                apiInterceptor.post(`/add-business`, finalPayload),
                {
                    loading: 'Submitting business request...',
                    success: 'Your business request has been sent to super admin. Your business will be listed after approval.',
                    error: (err) => {
                        console.error("Full error object:", err);
                        return err.response?.data?.error || 'Failed to submit business request. Please try again.';
                    }
                }
            );
            reset();
            resetCaptcha();
            setHasMasjidConnection(false);
        } catch (err) {
            console.error("Error submitting business request:", err);
        }
    };

    const isSubmitDisabled = !isValid || (isCaptchaEnabled && !isCaptchaVerified);

    return (
        <Grid px={2} container className={styles.infoBox} justifyContent={'center'} >
            <Grid
                className={`${styles.formContainer} ${styles.formContainerAutoHeight}`}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                container
                spacing={2}
                px={2}
                md={6}
                xs={12}
                sx={{ height: 'auto', minHeight: 0 }}
            >
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
                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => (
                                        <FormControl fullWidth error={!!errors.category}>
                                            <InputLabel id="category-label">Business Type</InputLabel>
                                            <Select
                                                labelId="category-label"
                                                label="Business Type"
                                                size='small'
                                                {...field}
                                            >
                                                {categoryOptions.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            {errors.category && (
                                                <FormHelperText>{errors.category.message}</FormHelperText>
                                            )}
                                        </FormControl>
                                    )}
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
                            <Grid item xs={12} md={6}>
                                <InputField
                                    control={control}
                                    errors={errors}
                                    name={"ownerFullName"}
                                    placeHolder={"Enter Owner Full Name"}
                                    label={"Owner Full Name"}
                                    type={"text"}
                                    errorName={errors?.ownerFullName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={hasMasjidConnection}
                                            onChange={(e) => setHasMasjidConnection(e.target.checked)}
                                            sx={{ color: '#042A29', '&.Mui-checked': { color: '#042A29' } }}
                                        />
                                    }
                                    label="Do you have a connection to the Masjid?"
                                />
                            </Grid>
                            {hasMasjidConnection && (
                                <Grid item xs={12}>
                                    <Controller
                                        name="masjidConnection"
                                        control={control}
                                        render={({ field }) => (
                                            <FormControl fullWidth error={!!errors.masjidConnection}>
                                                <InputLabel id="masjid-connection-label">Connection Type</InputLabel>
                                                <Select
                                                    labelId="masjid-connection-label"
                                                    label="Connection Type"
                                                    size="small"
                                                    {...field}
                                                >
                                                    <MenuItem value="Attendee">Attendee</MenuItem>
                                                    <MenuItem value="Sponsor">Sponsor</MenuItem>
                                                    <MenuItem value="Volunteer">Volunteer</MenuItem>
                                                </Select>
                                                {errors.masjidConnection && (
                                                    <FormHelperText>{errors.masjidConnection.message}</FormHelperText>
                                                )}
                                            </FormControl>
                                        )}
                                    />
                                </Grid>
                            )}
                            <RecaptchaField
                                recaptchaRef={recaptchaRef}
                                onChange={setCaptchaToken}
                                onExpired={handleCaptchaExpired}
                            />
                            <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
                                <Grid item xs={4}>
                                    <Button4 type={"submit"} disabled={isSubmitDisabled}>Send</Button4>
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
