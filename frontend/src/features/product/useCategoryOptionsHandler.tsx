// hooks
import { useState } from "react"

// type
import { categoriesType } from "../../types/CategoriesType.type"

const useCategoryOptionsHandler = () => {

    const [categoryOptions, setCategoryOptions] = useState<categoriesType>({})

    const handleMainCategoryChange = (value: string) => {
        setCategoryOptions((prev) => {
            if (!prev[value]) {
                return {
                    ...prev,
                    [value]: []
                }
            }
            return prev
        })
    }

    return {
        categoryOptions, setCategoryOptions, handleMainCategoryChange
    }
}

export default useCategoryOptionsHandler