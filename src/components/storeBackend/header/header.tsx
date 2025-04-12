// hooks
import { useNavigate } from "react-router-dom";
import usePopoverAnchor from "../../../hooks/usePopoverAnchor";
import useLoginForm from "../../../hooks/useLoginForm";

// components
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Badge
} from "@mui/material"
import NotifsPopover from "../../common/popover/notifsPopover";
import NotifsCard from "../../common/card/notifsCard";

// icon
import NotificationsIcon from '@mui/icons-material/Notifications';

// img
import Logo from '../../../assets/img/Store_Backend_Logo.png'

// style
import { headerLogoStyle, headerStyle, headerInfoAreaStyle } from "./headerStyle";

const Header = () => {

    const { anchorEl, handleClick, handleClose, open } = usePopoverAnchor()
    
    const navigate = useNavigate()
    const { handleSignOut,loading } = useLoginForm()

    return (
        <Box>
            <AppBar color='default'>
                <Toolbar >
                    {/* Logo */}
                    <Box sx={headerStyle}>
                        <Box
                            component="img"
                            src={Logo}
                            alt="Store Backend Logo"
                            sx={headerLogoStyle}
                        />
                    </Box>

                    {/* InfoArea */}
                    <Box sx={headerInfoAreaStyle}>
                        <IconButton
                            aria-label="notifications"
                            onClick={handleClick}
                        >
                            <Badge variant="dot" invisible={false} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Button
                            variant='text'
                            color="primary"
                            loading={loading}
                            onClick={() => handleSignOut(
                                () => {
                                    navigate('/')
                                }
                            )}
                        >登出</Button>
                    </Box>

                </Toolbar>
            </AppBar>

            {/* NotifsPopover */}
            <NotifsPopover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                <NotifsCard />
            </NotifsPopover>
        </Box>
    )
}

export default Header