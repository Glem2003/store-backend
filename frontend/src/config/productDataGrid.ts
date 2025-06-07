// type
import { GridColDef } from '@mui/x-data-grid';

// config
import { twdPrice } from './twdPrice';

export const paginationModel = { page: 0, pageSize: 5 };
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'SKU' },
    { field: 'name', headerName: '商品名稱', width: 120 },
    {
        field: 'price',
        headerName:'價錢',
        ...twdPrice
    },
    { field: 'qty', headerName: '數量', type: 'number' },
    { field: 'mainCategory', headerName: '主分類' },
    { field: 'subCategory', headerName: '子分類' },
    { field: 'status', headerName: '商品狀態', type: 'boolean' },
    { field: 'updatedAt', headerName: '最後更新時間', type: 'dateTime', width: 200 },
]