import React from 'react'
import { useForm } from 'react-hook-form';
import { object } from 'yup';
import { YupContactSchema, formContactSchema } from './helper';

const ContactUsForm = () => {
    let contactUsSchema = object(YupContactSchema);
    const { control, handleSubmit, formState: { errors, isValid } } = useForm(formContactSchema(contactUsSchema))

    const handleLoginSubmit = (payload) => {
        dispatch({ type: USER_LOGIN, payload })
    };
    return (
        <div>

        </div>
    )
}

export default ContactUsForm
