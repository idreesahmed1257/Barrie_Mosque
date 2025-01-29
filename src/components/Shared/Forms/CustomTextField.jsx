import { FormControl, FormHelperText, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import forms from './forms.module.scss';

const CustomTextField = ({ control, errors, name, label, required, placeHolder }) => {
    return (
        <div className={forms.customTextField}>
            {label && (
                <Typography fontWeight={300}>
                    {label}{required && <span className={forms.estaric}>*</span>}
                </Typography>
            )}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <FormControl
                        error={!!(errors && errors[name] && errors[name].message)}
                        fullWidth
                    >
                        <TextField
                            type={'text'}
                            variant="outlined"
                            size='small'
                            {...field}
                            placeholder={placeHolder}
                            fullWidth
                        />
                        <FormHelperText>
                            {errors && errors[name] && errors[name].message}
                        </FormHelperText>
                    </FormControl>
                )}
            />
        </div>
    );
};

export default CustomTextField;
