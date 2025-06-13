// hooks
import { UseFormWatch } from "react-hook-form"

// type
import { productsDataType } from "../../types/ProductsAPI.type"

const useFormWatchers = (watch: UseFormWatch<productsDataType>) => {

    const watchedSKU = watch('id')
    const watchName = watch('name')
    const watchedPrice = watch('price')
    const watchedQty = watch('qty')
    const watchedStatus = watch('status')
    const watchedMainCategory = watch('mainCategory')
    const watchedSubCategory = watch('subCategory')
    const watchedImages = watch('images')

    return {
        watchedSKU,
        watchName,
        watchedPrice,
        watchedQty,
        watchedStatus,
        watchedMainCategory,
        watchedSubCategory,
        watchedImages,
    }

}

export default useFormWatchers