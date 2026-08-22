import { useRef, useState } from 'react';

export function useRecaptcha() {
    const recaptchaRef = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);

    const resetCaptcha = () => {
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
    };

    const handleCaptchaExpired = () => setCaptchaToken(null);

    const isCaptchaEnabled = !!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    return {
        recaptchaRef,
        captchaToken,
        setCaptchaToken,
        resetCaptcha,
        handleCaptchaExpired,
        isCaptchaVerified: !!captchaToken,
        isCaptchaEnabled,
    };
}
