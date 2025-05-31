// components
import { Card, CardContent, Typography } from "@mui/material"

// type
import { InfoCardProps } from "./infoCard.type"

// utils
import formatNumber from "../../../utils/formatNumber"

const InfoCard: React.FC<InfoCardProps> = (props) => {

    const { title, span, value } = props

    return (
        <Card>
            <CardContent>
                <Typography>{title}</Typography>
                <Typography variant="h4"><span>{span}</span>{formatNumber(value)}</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoCard