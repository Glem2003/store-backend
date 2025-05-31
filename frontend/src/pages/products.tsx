// components
import { Box, Grid, Button, ButtonGroup } from "@mui/material"
import { DataGrid, GridEventListener } from '@mui/x-data-grid';

// data
import ProductsData from "../data/productsData";

// config
import { columns as productColumns, paginationModel } from "../config/productDataGrid";

// hooks
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Products = () => {

    const { t } = useTranslation()
    const { data } = ProductsData()
    const navigate = useNavigate()

    const [rowDataId, setRowDataId] = useState<number | null>(null)
    const handleSelect: GridEventListener<'rowClick'> = (params) => {
        if (params.id === rowDataId) {
            setRowDataId(null) // Cancel
        } else {
            setRowDataId(params.id as number)
        }
    }

    const handleAdd = () => {
        navigate('revision')
    }

    const handleEdit = (id: number) => {
        if (id) console.log('click:' + id)
        navigate('revision')
    }

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
                                onClick={handleAdd}
                            >
                                {t('add_product')}
                            </Button>
                            <Button
                                disabled={!rowDataId}
                                onClick={() => handleEdit(rowDataId || 0)}
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