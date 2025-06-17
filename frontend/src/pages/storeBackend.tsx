import { Outlet } from "react-router-dom";

// hooks
import useSelectItem from "../hooks/useSelectItem";

// layout
import StoreBackendLayout from "../components/layout/storeBackend/storeBackend";
import Slide from "../components/storeBackend/slide/slide";
import Main from "../components/storeBackend/main/main";

// components
import { Box } from "@mui/material";
import Header from "../components/storeBackend/header/header";

const StoreBackend = () => {

    const {
        selectedItem,
        handleSelect,
        handleChange,
        handleClose,
        drawerControl
    } = useSelectItem()

    return (
        <StoreBackendLayout
            header={<Header />}
            slide={
                <Slide
                    selected={selectedItem}
                    handleListBtn={handleSelect}
                    onChange={handleChange}
                    drawerControl={drawerControl}
                    BottomNavHandleOnClose={handleClose}
                />
            }
            main={
                <Main>
                    <Box padding={3}>
                        <Outlet />
                    </Box>
                </Main>
            }
        />
    );
};

export default StoreBackend;
