// components
import {
    List,
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse
} from "@mui/material"

// icons
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// type
import { NavListsProp } from "./navList.type";

const NavList: React.FC<NavListsProp> = (props) => {

    const { 
        title, 
        list, 
        selected, 
        handleListBtn 
    } = props

    return (
        <List
            component="nav"
            subheader={
                <ListSubheader component="div">
                    {title}
                </ListSubheader>
            }
        >
            {list && list.map(({ icon, text, submodule, value }) => {
                return (
                    <div key={value}>
                        <ListItemButton
                            selected={selected === value}
                            onClick={() => handleListBtn?.(value!)}
                        >
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            {submodule && (selected === value ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                        </ListItemButton>
                        {submodule &&
                            (
                                <Collapse in={selected === value} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {submodule.map((item, index) => {
                                            return (
                                                <ListItemButton sx={{ pl: 4 }} key={index}>
                                                    <ListItemText primary={item} />
                                                </ListItemButton>
                                            )
                                        })}
                                    </List>
                                </Collapse>
                            )
                        }
                    </div>
                )
            })}
        </List>
    )
}

export default NavList