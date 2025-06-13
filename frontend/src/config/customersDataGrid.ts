// type
import { GridColDef } from '@mui/x-data-grid';

export const paginationModel = { page: 0, pageSize: 5 };
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'User Name', width: 120 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 180 },
    { field: 'status', headerName: 'Status', type: 'boolean' },
    { field: 'createdAt', headerName: 'Created At', type: 'dateTime', width: 200 },
]