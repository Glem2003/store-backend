// type
import { GridColTypeDef } from '@mui/x-data-grid';

const currencyFormatter = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

export const twdPrice: GridColTypeDef = {
    type: 'number',
    width: 130,
    valueFormatter: (value: string) => currencyFormatter.format(Number(value)),
};