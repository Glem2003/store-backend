// hooks
import useFetchData from "../hooks/useFetchData"

// type
import { productsDataType } from "../types/ProductsAPI.type";

// api
import { PRODUCTS_API } from "../config/apiConfig";

const ProductsData = () => {

    const { data, ...rest } = useFetchData<productsDataType[]>(PRODUCTS_API)

    const formattedData = data?.map((item) => ({
        ...item,
        updatedAt: new Date(item.updatedAt)
    })) ?? []

    return {
        data: formattedData,
        ...rest
    }
}

export default ProductsData