// components
import { Box, Grid, Container } from '@mui/material';

// style
import { layoutStyle, containerStyle, headerStyle, slideGridStyle, mainGridStyle } from './storeBackendStyle';

// type
import { StoreBackendLayoutProp } from './storeBackend.type';

const StoreBackendLayout: React.FC<StoreBackendLayoutProp> = (props) => {

    const { header, slide, main } = props

    return (
        <Box sx={layoutStyle}>
            <Container maxWidth='xl'>
                <Grid container rowSpacing={1} columnSpacing={1} sx={containerStyle}>
                    <Grid size={12} sx={headerStyle}>
                        {header}
                    </Grid>
                    <Grid
                        size={{ md: 4, xs: 12 }}
                        order={{ md: 1, xs: 2 }}
                        sx={slideGridStyle}
                    >
                        {slide}
                    </Grid>
                    <Grid
                        size={{ md: 8, xs: 12 }}
                        sx={mainGridStyle}
                        order={{ md: 2, xs: 1 }}
                    >
                        {main}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default StoreBackendLayout