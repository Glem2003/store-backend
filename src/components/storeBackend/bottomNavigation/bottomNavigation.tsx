// components
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

// icons
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// type
import { BottomNavProp } from './bottomNavigation.type';

const BottomNav: React.FC<BottomNavProp> = (props) => {

    const {
        value,
        onChange,
        sx,
        handleOnClose
    } = props

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={onChange}
            sx={sx}
        >
            <BottomNavigationAction
                label="Home"
                value="store-ops-home"
                icon={<HomeFilledIcon />}
            />
            <BottomNavigationAction
                label="Orders"
                value='store-ops-orders'
                icon={<LocalOfferTwoToneIcon />}
            />
            <BottomNavigationAction
                label="More"
                value='more'
                icon={<MoreHorizIcon />}
                onClick={handleOnClose}
            />
        </BottomNavigation>
    )
}

export default BottomNav