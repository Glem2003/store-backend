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

// hooks
import { useTranslation } from "react-i18next";

const NavList: React.FC<NavListsProp> = (props) => {

    const { t } = useTranslation()

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
                    {t(title)}
                </ListSubheader>
            }
            sx={{ width: '100vw' }}
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
                            <ListItemText primary={t(text)} />
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