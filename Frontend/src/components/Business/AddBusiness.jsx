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
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import apiInterceptor from '@/lib/api';

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
    let businessSchema = object(YupBusinessSchema);
    const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm(formBusinessSchema(businessSchema))

    const handleBusinessSubmit = async (payload) => {
        console.log("payload", payload)
        try {
            await toast.promise(
                apiInterceptor.post(`/add-business`, payload),
                {
                    loading: 'Submitting business request...',
                    success: 'Your business request has been sent to super admin. Your business will be listed after approval.',
                    error: (err) => {
                        console.error("Full error object:", err);
                        return err.response?.data?.error || 'Failed to submit business request. Please try again.';
                    }
                }
            ).then(resp => {

            });
            reset();
        } catch (err) {
            console.error("Error submitting business request:", err);
        }
    };
    return (
        <Grid px={2} container className={styles.infoBox} justifyContent={'center'} >
            <Grid className={styles.formContainer} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} container spacing={2} px={2} md={6} xs={12}>
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
