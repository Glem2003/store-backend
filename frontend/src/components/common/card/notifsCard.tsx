// components
import { Card, CardHeader, CardContent, Typography, Divider } from "@mui/material"

// hooks
import { useTranslation } from "react-i18next"

const NotifsCard = () => {

    const { t } = useTranslation()

    return (
        <Card sx={{ width: 250 }}>
            <CardHeader
                title={
                    <Typography variant="h6">{t('notification')}</Typography>
                }
            />
            <Divider />
            <CardContent>
                <p>你有一筆新訂單</p>
            </CardContent>
        </Card>
    )
}

export default NotifsCard