// components
import { Drawer } from "@mui/material"

// type
import { menuDrawerProp } from "./drawer.type"

const MenuDrawer: React.FC<menuDrawerProp> = (props) => {

    const {
        anchor = 'left',
        open,
        onClose,
        children,
    } = props

    return (
        <Drawer anchor={anchor} open={open} onClose={onClose}>
            {children}
        </Drawer>
    )
}

export default MenuDrawer