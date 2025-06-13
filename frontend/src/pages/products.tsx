// components
import { Box, Grid, Button, ButtonGroup } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

// data
import ProductsData from "../data/productsData";

// config
import { columns as productColumns, paginationModel } from "../config/productDataGrid";

// hooks
import { useTranslation } from "react-i18next";
import useProductForm from "../features/useProductForm";

const Products = () => {

    const { t } = useTranslation()
    const { data } = ProductsData()

    const { rowDataId, handleSelect, handleBtnAdd, handleBtnEdit } = useProductForm()

    return (
        <>
            <Grid container direction={'column'} sx={{ height: 'calc( 100vh - 140px )' }}>
                <Grid sx={{ flex: 1 }} size={12}>
                    <Box sx={{ height: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={productColumns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5]}
                            showToolbar
                            onRowClick={handleSelect}
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
                                disabled={rowDataId != null}
                                onClick={handleBtnAdd}
                            >
                                {t('add_product')}
                            </Button>
                            <Button
                                disabled={!rowDataId}
                                onClick={() => handleBtnEdit(rowDataId || 0)}
                            >
                                {t('edit_product')}
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}

export default Products