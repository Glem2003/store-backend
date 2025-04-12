// icons
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

export const navSlideConfig = {
    "store-ops": {
        title: "商店營運模組",
        list: [
            {
                icon: <HomeFilledIcon />,
                text: '首頁',
                value: 'store-ops-home'
            },
            {
                icon: <LocalOfferTwoToneIcon />,
                text: '商品管理',
                value: 'store-ops-products'
            },
            {
                icon: <InventoryTwoToneIcon />,
                text: '訂單管理',
                value: 'store-ops-orders'
            },
            {
                icon: <SupervisorAccountTwoToneIcon />,
                text: '顧客管理',
                value: "store-ops-customers"
            }
        ]
    },
    "setting-ops": {
        title: "設定模組",
        list: [
            {
                icon: <SettingsTwoToneIcon />,
                text: '設定',
                value: 'setting-ops-setting'
            }
        ]
    }
}