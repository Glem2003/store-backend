// components
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

// type
import { BottomNavProp } from './bottomNavigation.type';

// data
import { navButtons } from '../../../data/navButtons';

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
            {navButtons.map((item) =>
            (
                <BottomNavigationAction
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    icon={item.icon}
                    onClick={item.value === 'more' ? handleOnClose : undefined}
                />
            )
            )}
        </BottomNavigation>
    )
}

export default BottomNav