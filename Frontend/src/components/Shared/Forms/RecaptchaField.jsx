import { Grid } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';

const RecaptchaField = ({ recaptchaRef, onChange, onExpired }) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
        return null;
    }

    return (
        <Grid item xs={12} display="flex" justifyContent="center">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={onChange}
                onExpired={onExpired}
            />
        </Grid>
    );
};

export default RecaptchaField;
