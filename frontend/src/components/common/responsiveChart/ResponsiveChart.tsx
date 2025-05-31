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
import { ResponsiveChartProps } from './ResponsiveChart.type'

const ResponsiveChart: React.FC<ResponsiveChartProps> = (props) => {

    const { title, xAxis, series, dataset, sx } = props

    return (
        <Box sx={{ height: 500, minWidth: 600 }}>
            {title && (
                <Typography variant="h6">
                    {title}
                </Typography>
            )}
            <ResponsiveChartContainer
                xAxis={xAxis}
                series={series}
                dataset={dataset}
                sx={sx}
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