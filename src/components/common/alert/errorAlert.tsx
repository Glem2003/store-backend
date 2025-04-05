// components
import {
    IconButton,
    Alert
} from "@mui/material"

// icon
import CloseIcon from '@mui/icons-material/Close';

// type
import { errorAlertProps } from "./alert.type";

// style
import { errorAlertStyle } from "./alertStyle";

const ErrorAlert: React.FC<errorAlertProps> = (props) => {

    const { closeBtnClick, message } = props

    return (
        <Alert
            severity="error"
            variant='filled'
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={closeBtnClick}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={errorAlertStyle}
        >
            {message}
        </Alert>
    )
}

export default ErrorAlert