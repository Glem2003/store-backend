// hooks
import { useCallback } from "react";
import { UseFormReset, UseFormSetValue } from "react-hook-form"

// type
import { ProductsDataType } from "../../types/ProductsAPI.type"

// API
import { PRODUCTS_API } from "../../config/apiConfig";

const useLoadData = ({
    reset,
    setValue
}: {
    reset: UseFormReset<ProductsDataType>
    setValue: UseFormSetValue<ProductsDataType>
}) => {

    const getFormDataFromId = useCallback(async (id: string) => {
        try {
            const res = await fetch(`${PRODUCTS_API}/${id}`)
            if (!res.ok) throw new Error("Https Error");
            const data = await res.json()

            if (!data) return

            const mappedData = {
                id: data.id,
                name: data.name,
                price: Number(data.price),
                qty: Number(data.qty),
                mainCategory: data.mainCategory || '',
                subCategory: data.subCategory || '',
                status: data.status ?? false,
                images: data.images || ''
            }

            reset(mappedData)

            if (data.images) {
                setValue("images", data.images)
            }

        } catch (err) {
            console.error(err)
        }
    }, [reset, setValue])

    return { getFormDataFromId }
}

export default useLoadData