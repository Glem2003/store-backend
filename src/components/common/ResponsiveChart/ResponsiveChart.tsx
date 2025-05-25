// components
import {
    ResponsiveChartContainer,
    LinePlot,
    MarkPlot,
    ChartsLegend,
    ChartsTooltip,
    ChartsAxisHighlight,
    ChartsGrid,
    ChartsXAxis,
    ChartsYAxis,
} from '@mui/x-charts'
import {
    Box,
    Typography,
} from "@mui/material"

// type
interface ResponsiveChartProps {
    title?: string
    xAxis: any
    series: any
    dataset?: any
}

const ResponsiveChart: React.FC<ResponsiveChartProps> = (props) => {

    const { title, xAxis, series, dataset } = props

    return (
        <Box sx={{ height: 500, width: '100%' }}>
            {title && (
                <Typography variant="h6">
                    {title}
                </Typography>
            )}
            <ResponsiveChartContainer
                xAxis={xAxis}
                series={series}
                dataset={dataset}
            >
                <LinePlot />
                <MarkPlot />
                <ChartsTooltip />
                <ChartsLegend position={{ horizontal: 'left', vertical: 'top' }} direction="row" />
                <ChartsAxisHighlight x="line" y="line" />
                <ChartsGrid horizontal vertical />
                <ChartsXAxis />
                <ChartsYAxis />
            </ResponsiveChartContainer>
        </Box>
    )
}

export default ResponsiveChart