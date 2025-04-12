// components
import { Card, CardHeader, CardContent, Typography, Divider } from "@mui/material"

const NotifsCard = () => {
    return (
        <Card sx={{ width: 250 }}>
            <CardHeader
                title={
                    <Typography variant="h6">通知</Typography>
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