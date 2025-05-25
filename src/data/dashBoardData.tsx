// hooks
import useFetchData from "../hooks/useFetchData"

// type
import {
    SummaryDataType,
    SalesDataType
} from "../types/DashboardAPI"

export const SummaryData = () => {

    const { data } = useFetchData<SummaryDataType>('/api/dashboard/summary.json')

    return [
        {
            title: 'total_sales_amount',
            span: '$',
            value: data?.totalSales
        },
        {
            title: 'order_quantity',
            value: data?.totalOrders
        },
        {
            title: 'member_quantity',
            value: data?.totalCustomers
        },
    ]
}

export const SalesData = (url: string) => {

    const { data } = useFetchData<SalesDataType[]>(url)

    const x = data?.map(item => item.date) || []
    const y = data?.map(item => item.sales) || []

    return { x, y }
}