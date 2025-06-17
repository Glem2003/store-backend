export interface CustomerDataType {
    id: string,
    username: string,
    email: string,
    phone: string,
    createdAt: Date,
    status: boolean
}

export type FormattedCustomers = Omit<CustomerDataType, 'createdAt'> & {
    createdAt: Date
}