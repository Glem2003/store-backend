// components
import { Popover } from "@mui/material"

// type
interface notifPopoverProps {
    open: boolean
    anchorEl?: any
    children?: React.ReactNode
    onClose?: () => void
}

const NotifsPopover: React.FC<notifPopoverProps> = (props) => {

    const {
        open,
        anchorEl,
        children,
        onClose
    } = props

    return (
        <Popover
            open={open}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{
                top: 6
            }}
        >
            {children}
        </Popover>
    )
}

export default NotifsPopover