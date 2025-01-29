"use client"
import { Card, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { object } from 'yup';
import styles from '../../components/Shared/InfoBox/info.module.scss';
import { YupSundaySchoolSchema, formSundaySchoolSchema, studentAgeOptions, noOfChildrenOptions, genderOptions } from './helper';
import Button4 from '@/components/Shared/Buttons/Button4';
import CustomTextField from '@/components/Shared/Forms/CustomTextField';
import RHFSelect from '@/components/Shared/Forms/RHFSelect';
import RHFCheckBox from '@/components/Shared/Forms/RHFCheckBox';

const SundaySchoolForm = ({ text }) => {
    let sundaySchoolSchema = object(YupSundaySchoolSchema);
    const { control, handleSubmit, formState: { errors } } = useForm(formSundaySchoolSchema(sundaySchoolSchema));

    const handleSundaySchoolSubmit = (payload) => {
        console.log("payload", payload);
    };

    return (
        <Grid px={2} container justifyContent={'center'} spacing={2}>
            <Grid className={styles.formContainer} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} container spacing={2} px={4} xs={12} md={8}>
                <br />
                <Card elevation={3} className={styles.contactCard}>
                    <Grid textAlign={'center'}>
                        {text}
                    </Grid>
                    <br />
                    <form onSubmit={handleSubmit(handleSundaySchoolSubmit)}>
                        <Grid container spacing={2}>
                            {/* Parent Name */}
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    control={control}
                                    errors={errors}
                                    name="parentName"
                                    type="text"
                                    label="Parent Name"
                                    required={true}
                                    placeHolder="Enter Parent Name"
                                />
                            </Grid>

                            {/* Parent Phone */}
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    control={control}
                                    errors={errors}
                                    name="parentPhone"
                                    placeHolder="Enter Parent Phone Number"
                                    label="Parent Phone"
                                    type="text"
                                    errorName={errors?.parentPhone}
                                />
                            </Grid>

                            {/* Parent Email */}
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    control={control}
                                    errors={errors}
                                    name="parentEmail"
                                    placeHolder="Enter Parent Email"
                                    label="Parent Email"
                                    type="email"
                                    errorName={errors?.parentEmail}
                                />
                            </Grid>

                            {/* Contact Number */}
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    control={control}
                                    errors={errors}
                                    name="contactNo"
                                    placeHolder="Enter Contact Number"
                                    label="Contact Number"
                                    type="text"
                                    errorName={errors?.contactNo}
                                />
                            </Grid>

                            {/* Contact Email */}
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    control={control}
                                    errors={errors}
                                    name="contactEmail"
                                    placeHolder="Enter Contact Email"
                                    label="Contact Email"
                                    type="email"
                                    errorName={errors?.contactEmail}
                                />
                            </Grid>

                            {/* Home Address */}
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    control={control}
                                    errors={errors}
                                    name="homeAddress"
                                    placeHolder="Enter Home Address"
                                    label="Home Address"
                                    type="text"
                                    errorName={errors?.homeAddress}
                                />
                            </Grid>

                            {/* Number of Children Dropdown */}
                            <Grid item xs={12} md={6}>
                                <RHFSelect
                                    control={control}
                                    name="noOfChildren"
                                    label="Number of Children"
                                    options={noOfChildrenOptions}
                                />
                            </Grid>

                            {/* Student Name */}
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    control={control}
                                    errors={errors}
                                    name="studentName"
                                    type="text"
                                    label="Student Name"
                                    required={true}
                                    placeHolder="Enter Student Name"
                                />
                            </Grid>

                            {/* Student Age Dropdown */}
                            <Grid item xs={12} md={6}>
                                <RHFSelect
                                    control={control}
                                    name="studentAge"
                                    label="Student Age"
                                    options={studentAgeOptions}
                                />
                            </Grid>

                            {/* Student Gender Dropdown */}
                            <Grid item xs={12} md={6}>
                                <RHFSelect
                                    control={control}
                                    name="studentGender"
                                    label="Student Gender"
                                    options={genderOptions}
                                />
                            </Grid>

                            {/* Is Child 6 Years Old? */}
                            <Grid item xs={12} md={6}>
                                <RHFCheckBox
                                    control={control}
                                    errors={errors}
                                    name="isChildSixYearOld"
                                    label="Is Child 6 Years Old?"
                                />
                            </Grid>

                            {/* First Time Attending? */}
                            <Grid item xs={12} md={6}>
                                <RHFCheckBox
                                    control={control}
                                    errors={errors}
                                    name="isFirstTime"
                                    label="First Time Attending?"
                                />
                            </Grid>

                            {/* Submit Button */}
                            <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
                                <Grid item xs={4}>
                                    <Button4 type="submit">Send</Button4>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
};

export default SundaySchoolForm;
