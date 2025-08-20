import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#042A29',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#042A29',
  },
}));


