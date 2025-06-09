export interface productsDataType {
    id: string,
    name: string,
    price: number,
    qty: number,
    mainCategory: string,
    subCategory: string
    status: boolean,
    updatedAt: string,
    images: string | null
}