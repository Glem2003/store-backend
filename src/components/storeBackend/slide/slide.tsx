// hooks
import { useMediaQuery, useTheme } from '@mui/material';

// components
import { Card, Box } from '@mui/material';
import NavList from '../../../components/common/list/navList'
import BottomNav from '../bottomNavigation/bottomNavigation';

// data
import { navSlideConfig } from "../../../data/navSlideConfig";

// type
import { slideProps } from './slide.type';

const Slide: React.FC<slideProps> = (props) => {

    const { selected, handleListBtn, onChange } = props

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    if (isMobile) {
        return (
            <Card raised>
                <BottomNav value={selected} onChange={onChange} />
            </Card>
        )
    }

    return (
        <Box
            component='aside'
            sx={{
                height: 'calc( 100% - 10px)'
            }}
        >
            <Card
                raised
                sx={{
                    height: '100%'
                }}
            >
                {Object.entries(navSlideConfig).map(([key, config]) => {
                    return (
                        <NavList
                            key={key}
                            title={config.title}
                            list={config.list}
                            selected={selected}
                            handleListBtn={handleListBtn}
                        />
                    )
                })}
            </Card>
        </Box>
    )
}

export default Slide