// hooks
import useIsMobile from '../../../hooks/useIsMobile';

// components
import { Card, Box, Paper } from '@mui/material';
import NavList from '../../../components/common/list/navList'
import BottomNav from '../bottomNavigation/bottomNavigation';
import MenuDrawer from '../../common/drawer/drawer';

// data
import { navSlideConfig } from "../../../data/navSlideConfig";

// type
import { slideProps } from './slide.type';

const Slide: React.FC<slideProps> = (props) => {

    const {
        selected,
        handleListBtn,
        onChange,
        drawerControl,
        BottomNavHandleOnClose
    } = props

    const { isMobile } = useIsMobile('md')

    if (isMobile) {
        return (
            <>
                <Card raised>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                        <BottomNav
                            value={selected}
                            onChange={onChange}
                            handleOnClose={BottomNavHandleOnClose}
                            sx={{ zIndex: 2000 }}
                        />
                    </Paper>
                    <MenuDrawer
                        anchor='right'
                        open={drawerControl}
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
                    </MenuDrawer>
                </Card>
            </>
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