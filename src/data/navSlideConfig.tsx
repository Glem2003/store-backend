// icons
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

export const navSlideConfig = {
    "store-ops": {
        title: "store_operation_module",
        list: [
            {
                icon: <HomeFilledIcon />,
                text: 'dashboard',
                value: 'store-ops-home'
            },
            {
                icon: <LocalOfferTwoToneIcon />,
                text: 'product_management',
                value: 'store-ops-products'
            },
            {
                icon: <InventoryTwoToneIcon />,
                text: 'order_management',
                value: 'store-ops-orders'
            },
            {
                icon: <SupervisorAccountTwoToneIcon />,
                text: 'customer_management',
                value: "store-ops-customers"
            }
        ]
    },
    "setting-ops": {
        title: "setting_module",
        list: [
            {
                icon: <SettingsTwoToneIcon />,
                text: 'settings',
                value: 'setting-ops-setting'
            }
        ]
    }
}