import { useNavigate } from 'react-router-dom';

// component
import {
    Typography,
    CardContent,
    Card,
    TextField,
    Button,
    Box,
} from '@mui/material';
import ErrorAlert from '../alert/errorAlert';

// style
import { cardStyle, cardFormStyle } from './loginCardStyle';

// hooks
import useLoginForm from '../../../hooks/useLoginForm';
import useLoginAlert from '../../../hooks/useLoginAlert';

const LoginCard = () => {

    const {
        userName,
        password,
        loading,
        setUserName,
        setPassword,
        handleLogin,
    } = useLoginForm()

    const {
        error,
        setError,
        alertShow,
        setAlertShow,
        handleClose
    } = useLoginAlert()

    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Card sx={cardStyle}>
                <CardContent>
                    <Typography variant='h4' align='center' gutterBottom>
                        Store Backend
                    </Typography>
                    <Box
                        component='form'
                        sx={cardFormStyle}
                        autoComplete='off'
                        noValidate
                    >
                        <TextField
                            label='UserName'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                            label='Password'
                            type='password'
                            className='margin-left-unset'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            size="large"
                            onClick={
                                () => handleLogin(
                                    setError,

                                    // susses
                                    () => { 
                                        setAlertShow(false);
                                        navigate('/store-backend');
                                    }
                                )
                            }
                            loading={loading}
                        >
                            Login
                        </Button>
                        <Button variant="text" size="large">
                            Forget the password
                        </Button>
                    </Box>
                </CardContent>
            </Card>
            {alertShow && (
                <ErrorAlert
                    closeBtnClick={handleClose}
                    message={error}
                />
            )}
        </Box>
    )
}

export default LoginCard