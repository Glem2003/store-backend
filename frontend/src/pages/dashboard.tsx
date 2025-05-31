// components
import {
    Grid,
    Box,
    Card,
    CardContent,
    ButtonGroup,
    Button,
    CardActions,
    Typography,
} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import InfoCard from "../components/common/card/infoCard"
import ResponsiveChart from "../components/common/responsiveChart/ResponsiveChart"

// data
import { SummaryData, SalesData } from "../data/dashBoardData"
import { quickOperationButton } from "../data/quickOperationButton";

// api
import { SALE_DATA_WEEKLY_APL, SALE_DATA_MONTH_APL, SALE_DATA_YEARLY_APL } from "../config"

// hooks
import { useTranslation } from "react-i18next"
import useSelectChartDateRange from "../hooks/useSelectChartDateRange";
import useIsMobile from "../hooks/useIsMobile";

// config
import { columns as orderColumns } from "../config/dashboardOrderDataGrid";

const DashBoard = () => {

    const { isMobile } = useIsMobile('sm')

    const { t } = useTranslation()
    const summary = SummaryData()

    const salesWeekly = SalesData(SALE_DATA_WEEKLY_APL)
    const saleMonth = SalesData(SALE_DATA_MONTH_APL)
    const saleYearly = SalesData(SALE_DATA_YEARLY_APL)

    const { isActive, handleClick } = useSelectChartDateRange()

    const rows = [
        { id: 1, name: 'Snow', state: 'Shipping', sum: 780, date: new Date('2025-04-11T10:30:00') },
        { id: 2, name: 'Lannister', state: 'Shipping', sum: 500, date: new Date('2025-04-12T14:30:00') },
        { id: 3, name: 'Bob', state: 'Completed', sum: 420, date: new Date('2025-04-16T19:30:00') }
    ]

    const paginationModel = { page: 0, pageSize: 5 };

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

            {/* To Do Order API */}
            <Box mt={6}>
                <Typography variant="h5">{t('latest_order')}</Typography>
                <DataGrid
                    sx={{ mt: 2 }}
                    rows={rows}
                    columns={orderColumns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    showToolbar
                />
            </Box>

            <Box
                mt={8}
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    gap: isMobile ? 1 : 3,
                }}
            >
                {quickOperationButton.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            variant="outlined"
                            size={isMobile ? 'medium' : 'large'}
                            href={`store-backend/${item.text}`}
                        >
                            {t(item.text)}
                        </Button>
                    )
                })}
            </Box>
        </>
    )
}

export default DashBoard