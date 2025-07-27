import { Box, CircularProgress, Typography } from '@mui/material';
import "./lodinSpinner.css"
const LoadingSpinner = ({ message = 'Loading...' }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            gap={2}
        >
            <div class="mosque-loader">
                <div class="crescent"></div>
                <div class="star"></div>
            </div>

        </Box>
    );
};

export default LoadingSpinner; 