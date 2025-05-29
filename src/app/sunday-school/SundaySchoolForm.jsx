"use client"
import { Card, Grid } from '@mui/material';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';
import { object } from 'yup';
import styles from '../../components/Shared/InfoBox/info.module.scss';
import { YupSundaySchoolSchema, formSundaySchoolSchema, studentAgeOptions, noOfChildrenOptions, genderOptions } from './helper';
import Button4 from '@/components/Shared/Buttons/Button4';
import CustomTextField from '@/components/Shared/Forms/CustomTextField';
import RHFSelect from '@/components/Shared/Forms/RHFSelect';
import RHFCheckBox from '@/components/Shared/Forms/RHFCheckBox';
import { useEffect } from 'react';

const SundaySchoolForm = ({ text, formSubmit }) => {
    let sundaySchoolSchema = object(YupSundaySchoolSchema);
    const { control, handleSubmit, formState: { errors } } = useForm(formSundaySchoolSchema(sundaySchoolSchema));


    const noOfChildren = useWatch({ control, name: "noOfChildren" }) || 0;

    const { fields, append, remove } = useFieldArray({
        control,
        name: "childrenInfo"
    });


    // Update children fields when noOfChildren changes
    useEffect(() => {
        const childrenCount = parseInt(noOfChildren, 10) || 0;
        const currentCount = fields.length;

        if (childrenCount > currentCount) {
            for (let i = currentCount; i < childrenCount; i++) {
                append({
                    studentName: "",
                    studentAge: "",
                    studentGender: "",
                    isChildSixYearOld: false,
                    isFirstTime: false,
                    allergies: "",
                    previousClass: ""
                });
            }
        } else if (childrenCount < currentCount) {
            for (let i = currentCount; i > childrenCount; i--) {
                remove(i - 1);
            }
        }
    }, [noOfChildren, append, remove, fields.length]);

    const handleSundaySchoolSubmit = (payload) => {
        console.log("payload in form", payload);
        formSubmit(payload)
    };


    return (
        <Grid px={2} container justifyContent={'center'} spacing={2}>
            <Grid className={styles.formContainer} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} container spacing={2} px={4} xs={12} md={8}>
                <br />
                <Card elevation={3} className={styles.contactCard}>
                    <p className={styles.contactTitle} >
                        {text}
                    </p>
                    <p className={styles.contactSubTitle}>
                        (MUST BE 6 YEARS OF AGE)
                    </p>
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

                            {fields.map((field, index) => (
                                <Grid item xs={12} key={field.id}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <p><strong>Details for Child {index + 1}</strong></p>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <CustomTextField
                                                control={control}
                                                errors={errors}
                                                name={`childrenInfo[${index}].studentName`}
                                                label="Student Name"
                                                required
                                                placeHolder="Enter Student Name"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <RHFSelect
                                                control={control}
                                                name={`childrenInfo[${index}].studentAge`}
                                                label="Student Age"
                                                options={studentAgeOptions}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <RHFSelect
                                                control={control}
                                                name={`childrenInfo[${index}].studentGender`}
                                                label="Student Gender"
                                                options={genderOptions}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <CustomTextField
                                                control={control}
                                                errors={errors}
                                                name={`childrenInfo[${index}].allergies`}
                                                label="Allergies"
                                                required
                                                placeHolder="Allergies"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <CustomTextField
                                                control={control}
                                                errors={errors}
                                                name={`childrenInfo[${index}].previousClass`}
                                                label="Previous Class/level"
                                                required
                                                placeHolder="Previous Class/level"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <RHFCheckBox
                                                control={control}
                                                errors={errors}
                                                name={`childrenInfo[${index}].isFirstTime`}
                                                label="First Time Attending?"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}



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
