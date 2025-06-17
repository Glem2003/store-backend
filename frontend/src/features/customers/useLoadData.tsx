// hooks
import { useCallback } from "react";
import { UseFormReset } from "react-hook-form"

// type
import { CustomerDataType } from "../../types/CustomerApi.type";

const useLoadData = ({
    reset,
    API
}: {
    reset: UseFormReset<CustomerDataType>
    API: string
}) => {

    const getFormDataFromId = useCallback(async (id: string) => {
        try {
            const res = await fetch(`${API}/${id}`)
            if (!res.ok) throw new Error("Https Error");
            const data = await res.json()

            if (!data) return

            const mappedData = {
                id: data.id,
                username: data.username,
                email: data.email,
                phone: data.phone,
                status: data.status
            }

            reset(mappedData)
            console.log(mappedData)

        } catch (err) {
            console.error(err)
        }
    }, [API, reset])

    return { getFormDataFromId }
}

export default useLoadData