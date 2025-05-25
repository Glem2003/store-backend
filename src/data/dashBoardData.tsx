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
            title: '總銷售額',
            span: '$',
            value: data?.totalSales
        },
        {
            title: '訂單數量',
            value: data?.totalOrders
        },
        {
            title: '會員數量',
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