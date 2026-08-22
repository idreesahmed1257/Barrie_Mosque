import { FormControl, FormHelperText } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import text from '../css/text.module.scss';
import forms from './forms.module.scss';
import { inputTextFieldStyles } from './helper';

const CustomTextField = ({ control, errors, name, type, label, icon: IconComponent, required, placeHolder }) => {

    return (
        <div className={forms.customTextField}>
            {label && (
                <label className={`${text.formLabel} ${forms.label}`}>
                    {label}{required && <span className={forms.estaric}>*</span>}
                </label>
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
                            {...field}
                            placeholder={placeHolder}
                            InputProps={{
                                startAdornment: IconComponent && (
                                    <InputAdornment position="start">
                                        <IconComponent />
                                    </InputAdornment>
                                ),
                                style: inputTextFieldStyles
                            }}
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
