// type
import { GridColDef } from '@mui/x-data-grid';

// config
import { twdPrice } from './twdPrice';

export const paginationModel = { page: 0, pageSize: 5 };
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'SKU' },
    { field: 'name', headerName: 'Product Name', width: 120 },
    {
        field: 'price',
        headerName: 'Price',
        ...twdPrice
    },
    { field: 'qty', headerName: 'Quantity', type: 'number' },
    { field: 'mainCategory', headerName: 'Main category' },
    { field: 'subCategory', headerName: 'subcategory' },
    { field: 'status', headerName: 'Product status', type: 'boolean' },
    { field: 'updatedAt', headerName: 'Last updated', type: 'dateTime', width: 200 },
]