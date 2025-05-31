// hooks
import { useMediaQuery, useTheme } from "@mui/material"

// type
import { Breakpoint } from "@mui/material"

const useIsMobile = (breakpoints: Breakpoint) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(breakpoints))

    return { isMobile }
}

export default useIsMobile