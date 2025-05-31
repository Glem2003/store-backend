import { useState } from "react"

const usePopoverAnchor = () => {

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl,
        setAnchorEl,
        handleClick,
        handleClose,
        open
    }
}

export default usePopoverAnchor