// type
import { GridColDef } from '@mui/x-data-grid';

// config
import { twdPrice } from './twdPrice';

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'sum', ...twdPrice },
    { field: 'date', headerName: 'Date', type: 'dateTime', width: 200 },
]