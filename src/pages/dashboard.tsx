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

const DashBoard = () => {

    const summary = SummaryData()

    const salesWeekly = SalesData(SALEDATAWEEKLYAPL)
    const saleMonth = SalesData(SALEDATAMONTHAPL)
    const saleYearly = SalesData(SALEDATAYEARLYAPL)

    const salesData = {
        x: salesWeekly.x,
        y: salesWeekly.y,
    }

    return (
        <>
            <Grid container spacing={3}>
                {summary && summary.map((item, index) => {
                    return (
                        <Grid size={{ xs: 12, sm: 4 }} key={index}>
                            <InfoCard title={item.title} span={item.span} value={item.value || 0} />
                        </Grid>
                    )
                })}
            </Grid>

            <Box mt={6}>
                <Card>
                    <CardActions>
                        <ButtonGroup>
                            <Button>每周</Button>
                            <Button>每月</Button>
                            <Button>每年</Button>
                        </ButtonGroup>
                    </CardActions>
                    <CardContent>
                        <ResponsiveChart
                            title="每周銷售趨勢"
                            xAxis={[{ id: 'days', scaleType: 'point', data: salesData.x }]}
                            series={[{ type: 'line', data: salesData.y }]}
                        />
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default DashBoard