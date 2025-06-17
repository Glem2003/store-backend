// hooks
import useFetchData from "./useFetchData"

const useFormatData = <T, R = T>(
    API: string,
    formatter?: (item: T) => R
) => {

    const { data, error, loading, ...rest } = useFetchData<T[]>(API)

    const formattedData = data?.map(item =>
        formatter ? formatter(item) : item as unknown as R
    ) ?? []

    return {
        data: formattedData,
        ...rest,
        error,
        loading
    }
}

export default useFormatData