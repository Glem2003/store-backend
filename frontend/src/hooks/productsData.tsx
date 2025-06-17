// hooks
import useFetchData from "./useFetchData"

// type
import { ProductsDataType } from "../types/ProductsAPI.type";

// api
import { PRODUCTS_API } from "../config/apiConfig";

const ProductsData = () => {

    const { data, error, loading, ...rest } = useFetchData<ProductsDataType[]>(PRODUCTS_API)

    const formattedData = data?.map((item) => ({
        ...item,
        updatedAt: new Date(item.updatedAt)
    })) ?? []

    return {
        data: formattedData,
        ...rest,
        error,
        loading
    }
}

export default ProductsData