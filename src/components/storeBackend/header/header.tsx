// components
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Button,
} from "@mui/material"

// icon
import NotificationsIcon from '@mui/icons-material/Notifications';

// img
import Logo from '../../../assets/img/Store_Backend_Logo.png'

const Header = () => {
    return (
        <AppBar color='default'>
            <Toolbar >
                <Box sx={{ flexGrow: 1 }}>
                    <Box
                        component="img"
                        src={Logo}
                        alt="Store Backend Logo"
                        sx={{
                            height: 50,
                            maxWidth: 160,
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton aria-label="notifications">
                        <NotificationsIcon />
                    </IconButton>
                    <Button variant='text' color="inherit">登出</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header