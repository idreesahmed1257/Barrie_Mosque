"use client"
import Button4 from '@/components/Shared/Buttons/Button4';
import CustomTextField from '@/components/Shared/Forms/CustomTextField';
import RHFCheckBox from '@/components/Shared/Forms/RHFCheckBox';
import RHFSelect from '@/components/Shared/Forms/RHFSelect';
import { Card, Grid, Typography } from '@mui/material';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import { object } from 'yup';
import styles from '../../components/Shared/InfoBox/info.module.scss';
import { YupArabicSchoolSchema, formArabicSchoolSchema } from './helper';
import { studentAgeOptions, noOfChildrenOptions, genderOptions } from './helper';
import { useEffect } from 'react';
import { theme } from '../ThemeProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MAILS } from '../Shared/enums';

const ArabicSchoolForm = ({ text }) => {
  let arabicSchoolSchema = object(YupArabicSchoolSchema);
  const { control, handleSubmit, formState: { errors } } = useForm(formArabicSchoolSchema(arabicSchoolSchema));

  // Watch noOfChildren value
  const noOfChildren = useWatch({ control, name: "noOfChildren" }) || 0;

  // Manage dynamic child fields
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
          childrenName: "",
          allergies: "",
          childrenAge: "",
          childrenGender: "",
          isChildSixYearOld: false,
          isFirstTime: false
        });
      }
    } else if (childrenCount < currentCount) {
      for (let i = currentCount; i > childrenCount; i--) {
        remove(i - 1);
      }
    }
  }, [noOfChildren, append, remove, fields.length]);

  const handleArabicSchoolSubmit = async (payload) => {
    console.log("payload", payload);

    const sendEmailPromise = axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email`, {
      data: payload,
      mailType: "arabic_school_registration",
      mailTo: MAILS.arabicSchool
    });

    toast.promise(
      sendEmailPromise,
      {
        loading: "Sending email...",
        success: "Email Sent Successfully, Someone from School will contact you shortly",
        error: "Failed to send email, please try again"
      }
    );

    await sendEmailPromise;
  };

  console.log("error", errors)

  return (
    <Grid px={2} container justifyContent={'center'} spacing={2}>
      <Grid className={styles.formContainer} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} container spacing={2} px={4} xs={12} md={10}>
        <br />
        <Card elevation={3} className={styles.contactCard}>
          <Grid textAlign={'center'}>
            {text}
          </Grid>
          <br />
          <form onSubmit={handleSubmit(handleArabicSchoolSubmit)}>
            <Grid container spacing={2}>

              {/* Parent Name */}
              <Grid item xs={12} md={6}>
                <CustomTextField control={control} errors={errors} name="parentName" label="Parent Name" required placeHolder="Enter Parent Name" />
              </Grid>

              {/* Parent Phone */}
              <Grid item xs={12} md={6}>
                <CustomTextField control={control} errors={errors} name="parentPhone" placeHolder="Enter Parent Phone Number" label="Parent Phone" />
              </Grid>

              {/* Parent Email */}
              <Grid item xs={12} md={6}>
                <CustomTextField control={control} errors={errors} name="parentEmail" placeHolder="Enter Parent Email" label="Parent Email" />
              </Grid>

              {/* Home Address */}
              <Grid item xs={12} md={6}>
                <CustomTextField control={control} errors={errors} name="homeAddress" placeHolder="Enter Home Address" label="Home Address" />
              </Grid>

              {/* Number of Children Dropdown */}
              <Grid item xs={12} md={6}>
                <RHFSelect control={control} name="noOfChildren" label="Number of Children" options={noOfChildrenOptions} />
              </Grid>

              {/* Dynamic Children Fields */}
              {fields.map((field, index) => (
                <>
                  <Grid xs={12} mt={2} key={field.id}  >
                    <Grid item xs={12} textAlign={'center'}>
                      <Typography fontWeight={"bold"}>Details for Child {index + 1}</Typography>
                    </Grid>
                    <Grid container justifyContent={"space-between"} p={2} mt={1} border={`1px solid ${theme.palette.secondary.main}`} borderRadius={5}>
                      <Grid item xs={12} md={5.8}>
                        <CustomTextField control={control} errors={errors} name={`childrenInfo[${index}].childrenName`} label={`Child Name`} required placeHolder="Enter Child Name" />
                      </Grid>

                      {/* Child Age */}
                      <Grid item xs={12} md={5.8}>
                        <RHFSelect control={control} name={`childrenInfo[${index}].childrenAge`} label="Child Age" options={studentAgeOptions} />
                      </Grid>

                      {/* Child Gender */}
                      <Grid item xs={12} md={5.8}>
                        <RHFSelect control={control} name={`childrenInfo[${index}].childrenGender`} label="Child Gender" options={genderOptions} />
                      </Grid>

                      {/* Allergies */}
                      <Grid item xs={12} md={5.8}>
                        <CustomTextField control={control} errors={errors} name={`childrenInfo[${index}].allergies`} label="Allergies/Medications" required placeHolder="Enter Allergies (if any)" />
                      </Grid>

                      {/* Is Child 6 Years Old? */}
                      <Grid item xs={12} md={5.8}>
                        <RHFCheckBox control={control} errors={errors} name={`childrenInfo[${index}].isChildSixYearOld`} label="Is Child 6 Years Old?" />
                      </Grid>

                      {/* First Time Attending? */}
                      <Grid item xs={12} md={5.8}>
                        <RHFCheckBox control={control} errors={errors} name={`childrenInfo[${index}].isFirstTime`} label="First Time Attending?" />
                      </Grid>
                    </Grid>
                  </Grid>

                </>

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

export default ArabicSchoolForm;
