// components
import { Box, Grid, Button, ButtonGroup } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

// hooks
import { useTranslation } from "react-i18next";

// type
interface EntityListPageType {

}

const paginationModel = { page: 0, pageSize: 5 };

const EntityListPage: React.FC = (props) => {

    const { t } = useTranslation()

    return (
        <>
            <Grid container direction={'column'} sx={{ height: 'calc( 100vh - 140px )' }}>
                <Grid sx={{ flex: 1 }} size={12}>
                    <Box sx={{ height: '100%' }}>
                        <DataGrid
                            rows={[]}
                            columns={[]}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5]}
                            showToolbar
                        />
                    </Box>
                </Grid>
                <Grid sx={{ flex: '0 0 60px' }} size={12}>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <ButtonGroup size="large" sx={{ p: 1 }}>
                            <Button
                            >
                                {t('add_customer')}
                            </Button>
                            <Button
                            >
                                {t('edit_customer')}
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}

export default EntityListPage