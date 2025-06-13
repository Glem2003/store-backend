// type
import { UseFormTrigger, UseFormWatch, UseFormReset, UseFormSetError } from "react-hook-form"
import { productsDataType } from "../../types/ProductsAPI.type"
import { loadingObject, messageDialog, showConfirmDialog } from "./useProductForm.type"
import type { TFunction } from "i18next"

export interface useFormHandlersType {
    reset: UseFormReset<productsDataType>
    trigger: UseFormTrigger<productsDataType>
    setImagesFile: React.Dispatch<React.SetStateAction<File | null>>
    setLoading: React.Dispatch<React.SetStateAction<loadingObject>>
    setMessageDialog: React.Dispatch<React.SetStateAction<messageDialog>>
    setError: UseFormSetError<productsDataType>
    showConfirmDialog: (config: showConfirmDialog) => Promise<boolean>
    uploadImageToCloudinary: (file: File) => Promise<string>
    watch: UseFormWatch<productsDataType>
    t: TFunction
    error: string | null
    imageFile: File | null
    watchedSKU: string
    watchName: string
    watchedPrice: number
    watchedQty: number
    watchedMainCategory: string
    watchedSubCategory: string
    watchedStatus: boolean
}