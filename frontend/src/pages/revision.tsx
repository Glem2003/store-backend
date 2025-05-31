// components
import { Grid, Typography, Button, ButtonGroup, TextField, MenuItem, Box } from "@mui/material"
import ImagesUpload from "../components/common/imageUpload/imageUpload"

// hooks
import useIsMobile from "../hooks/useIsMobile"

const Revision = () => {

    const { isMobile } = useIsMobile('sm')

    return (
        <Box component="form">
            <Grid
                container
                direction='column'
                sx={{ height: 'calc( 100vh - 140px )' }}
            >
                <Grid
                    size={12}
                    sx={{ flex: '0 0 60px' }}
                >
                    <Typography variant="h5">新增商品</Typography>
                </Grid>
                <Grid
                    container
                    size={12}
                    sx={{
                        borderTop: '1px solid gray',
                        flex: 1,
                        overflowY: 'scroll'
                    }}
                    direction={isMobile ? "column-reverse" : 'row'}
                >
                    <Grid
                        size={{ xs: 12, sm: 8 }}
                        flex={1}
                    >
                        <TextField fullWidth variant="filled" label="SKU" id="sku" required />
                        <TextField fullWidth variant="filled" label="Name" id="name" required />
                        <TextField fullWidth variant="filled" label="Price" id="price" required />
                        <TextField fullWidth variant="filled" label="QTY" id="qty" />
                        <TextField fullWidth variant="filled" label="Category" id="category" />
                    </Grid>
                    <Grid
                        size={{ xs: 12, sm: 4 }}
                    >
                        <ImagesUpload />
                    </Grid>

                </Grid>
                <Grid
                    size={12}
                    sx={{
                        borderTop: '1px solid gray',
                        flex: '0 0 60px',
                        display: 'grid',
                        placeContent: 'center'
                    }}
                >
                    <ButtonGroup>
                        <Button>儲存</Button>
                        <Button>重置</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Revision