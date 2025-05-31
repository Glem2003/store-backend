// components
import {
    Card,
    CardContent,
    Typography,
    CardActionArea,
    Grid
} from "@mui/material"

// hooks
import { useTranslation } from "react-i18next"
import useSelectItem from "../hooks/useSelectItem"

const Setting = () => {

    const { t } = useTranslation()
    const { handleSelect } = useSelectItem()

    return (
        <Grid container spacing={3}>

            <Grid size={6}>
                <Card>
                    <CardActionArea onClick={() => handleSelect('setting-ops-user')}>
                        <CardContent>
                            <Typography>{t('account_settings')}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid size={6}>
                <Card>
                    <CardActionArea onClick={() => handleSelect('setting-ops-system')}>
                        <CardContent>
                            <Typography>{t('system_settings')}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

        </Grid>
    )
}

export default Setting