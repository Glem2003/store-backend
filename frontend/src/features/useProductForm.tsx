// hooks
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import useFormHandlers from "./product/useFormHandlers"
import useRowSelector from './product/useRowSelector'
import useStatus from './product/useStatus'
import useLoadData from "./product/useLoadData"
import useMessageDialog from "./product/useMessageDialog"
import useFormWatchers from './product/useFormWatchers'
import useImageHandler from './product/useImageHandler'
import useCategoryOptionsHandler from './product/useCategoryOptionsHandler'

// type
import { productsDataType } from "../types/ProductsAPI.type"

// utils
import uploadImageToCloudinary from "../utils/uploadImageToCloudinary"
import convertToArray from '../utils/convertToArray'

// data
import ProductsData from "../data/productsData";

const useProductForm = () => {

    const { data, error } = ProductsData()

    const { t } = useTranslation()

    const {
        register,
        reset,
        setValue,
        watch,
        control,
        trigger,
        setError,
        formState: { errors }
    } = useForm<productsDataType>({
        mode: "onBlur",
        defaultValues: {
            id: "",
            name: "",
            price: 0,
            qty: 0,
            mainCategory: '',
            subCategory: '',
            status: false,
            images: null
        }
    })

    const {
        watchedSKU,
        watchName,
        watchedPrice,
        watchedQty,
        watchedStatus,
        watchedMainCategory,
        watchedSubCategory,
        watchedImages
    } = useFormWatchers(watch)
    const { categoryOptions, setCategoryOptions, handleMainCategoryChange } = useCategoryOptionsHandler()
    const { imageFile, setImagesFile, handleImageChange } = useImageHandler({ setValue })

    const {
        rowDataId,
        handleSelect
    } = useRowSelector()

    const { loading, setLoading, messageDialog, setMessageDialog } = useStatus()

    const { getFormDataFromId } = useLoadData({ reset, setValue })

    const { showConfirmDialog, handleClose } = useMessageDialog({ setMessageDialog })

    const {
        handleBtnAdd,
        handleBtnEdit,
        handleReset,
        handleCancel,
        handleSave,
        handleAdd,
        handleDelete
    } = useFormHandlers({
        reset,
        setImagesFile,
        setLoading,
        trigger,
        setMessageDialog,
        watch,
        error,
        imageFile,
        uploadImageToCloudinary,
        watchedSKU,
        watchName,
        watchedPrice,
        watchedQty,
        watchedMainCategory,
        watchedSubCategory,
        watchedStatus,
        t,
        setError,
        showConfirmDialog
    })

    useEffect(() => {
        if (!Array.isArray(data)) return
        const category = convertToArray(data)

        setCategoryOptions(prev => {
            const isEqual = JSON.stringify(prev) === JSON.stringify(category)
            return isEqual ? prev : category
        })

    }, [data, setCategoryOptions])

    return {
        register,
        setValue,
        reset,
        control,
        loading,
        errors,
        watchedSKU,
        watchName,
        watchedPrice,
        watchedQty,
        watchedStatus,
        watchedMainCategory,
        watchedSubCategory,
        watchedImages,
        messageDialog,

        rowDataId,
        categoryOptions,
        imageFile,
        error,

        setImagesFile,
        setMessageDialog,

        getFormDataFromId,
        handleMainCategoryChange,
        handleImageChange,
        handleAdd,
        handleSave,
        handleReset,
        handleDelete,
        handleClose,
        handleSelect,
        handleBtnAdd,
        handleBtnEdit,
        handleCancel
    }

}

export default useProductForm