// components
import {
    Grid,
    Box,
    Card,
    CardContent,
    ButtonGroup,
    Button,
    CardActions
} from "@mui/material"
import InfoCard from "../components/common/card/infoCard"
import ResponsiveChart from "../components/common/ResponsiveChart/ResponsiveChart"

// data
import {
    SummaryData,
    SalesData
} from "../data/dashBoardData"

// config
import { SALEDATAWEEKLYAPL, SALEDATAMONTHAPL, SALEDATAYEARLYAPL } from "../config"

// hooks
import { useState } from "react"
import { useTranslation } from "react-i18next"

// types
type DateRange = 'weekly' | 'month' | 'yearly'

const DashBoard = () => {

    const { t } = useTranslation()
    const summary = SummaryData()

    const salesWeekly = SalesData(SALEDATAWEEKLYAPL)
    const saleMonth = SalesData(SALEDATAMONTHAPL)
    const saleYearly = SalesData(SALEDATAYEARLYAPL)

    const [isActive, setActive] = useState<DateRange>('weekly')

    const handleClick = (value: DateRange) => {
        setActive(value)
    }

    return (
        <>
            <Grid container spacing={3}>
                {summary && summary.map((item, index) => {
                    return (
                        <Grid size={{ xs: 12, sm: 4 }} key={index}>
                            <InfoCard title={t(item.title)} span={item.span} value={item.value || 0} />
                        </Grid>
                    )
                })}
            </Grid>

            <Box mt={6}>
                <Card>
                    <CardActions>
                        <ButtonGroup sx={{ p: 2 }}>
                            <Button
                                onClick={() => handleClick('weekly')}
                                variant={isActive === 'weekly' ? 'contained' : 'outlined'}
                            >{t('weekly')}</Button>
                            <Button
                                onClick={() => handleClick('month')}
                                variant={isActive === 'month' ? 'contained' : 'outlined'}
                            >{t('monthly')}</Button>
                            <Button
                                onClick={() => handleClick('yearly')}
                                variant={isActive === 'yearly' ? 'contained' : 'outlined'}
                            >{t('yearly')}</Button>
                        </ButtonGroup>
                    </CardActions>
                    <CardContent sx={{ width: '100%', overflowX: 'auto' }}>
                        <ResponsiveChart
                            sx={{ padding: 2 }}
                            title={
                                isActive === 'weekly' ?
                                    `${t('weekly')} ${t('sales_Trend')}` :
                                    isActive === 'month' ?
                                        `${t('monthly')} ${t('sales_Trend')}` :
                                        `${t('yearly')} ${t('sales_Trend')}`
                            }
                            xAxis={[{
                                id: isActive === 'weekly' ? 'days' : isActive === 'month' ? 'month' : 'years',
                                scaleType: 'point',
                                data: isActive === 'weekly' ? salesWeekly.x : isActive === 'month' ? saleMonth.x : saleYearly.x
                            }]}
                            series={[{
                                type: 'line',
                                data: isActive === 'weekly' ? salesWeekly.y : isActive === 'month' ? saleMonth.y : saleYearly.y
                            }]}
                        />
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default DashBoard