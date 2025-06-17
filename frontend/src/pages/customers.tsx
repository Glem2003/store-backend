// components
import { Box, Grid, Button, ButtonGroup } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';

// hooks
import { useTranslation } from "react-i18next";
import useFormatData from "../hooks/useFormatData";
import useFormHooks from "../hooks/useFormHooks";

// config
import { columns as customersColumns, paginationModel } from "../config/customersDataGrid";
import { CUSTOMERS_API } from "../config/apiConfig";

// type
import { CustomerDataType, FormattedCustomers } from "../types/CustomerApi.type";

const Customers = () => {

    const { t } = useTranslation()
    const { data } = useFormatData<CustomerDataType, FormattedCustomers>(
        CUSTOMERS_API,
        item => ({
            ...item,
            createdAt: new Date(item.createdAt)
        })
    )
    
    const { rowDataId, handleSelect, handleBtnAdd, handleBtnEdit } = useFormHooks()

    return (
        <>
            <Grid container direction={'column'} sx={{ height: 'calc( 100vh - 140px )' }}>
                <Grid sx={{ flex: 1 }} size={12}>
                    <Box sx={{ height: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={customersColumns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[20]}
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
                                {t('add_customers')}
                            </Button>
                            <Button
                                disabled={!rowDataId}
                                onClick={() => handleBtnEdit(rowDataId || 0)}
                            >
                                {t('edit_customers')}
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}

export default Customers