// type
import { UseFormTrigger, UseFormWatch, UseFormReset, UseFormSetError } from "react-hook-form"
import { ProductsDataType } from "../../types/ProductsAPI.type"
import { loadingObject, messageDialog, showConfirmDialog } from "../../hooks/types/useMessageDialog.type"
import type { TFunction } from "i18next"

export interface useFormHandlersType {
    reset: UseFormReset<ProductsDataType>
    trigger: UseFormTrigger<ProductsDataType>
    setImagesFile: React.Dispatch<React.SetStateAction<File | null>>
    setLoading: React.Dispatch<React.SetStateAction<loadingObject>>
    setMessageDialog: React.Dispatch<React.SetStateAction<messageDialog>>
    setError: UseFormSetError<ProductsDataType>
    showConfirmDialog: (config: showConfirmDialog) => Promise<boolean>
    uploadImageToCloudinary: (file: File) => Promise<string>
    watch: UseFormWatch<ProductsDataType>
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