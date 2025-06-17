// hooks
import { useNavigate } from "react-router-dom"

// API
import { PRODUCTS_API } from "../../config/apiConfig"

// type
import { useFormHandlersType } from "./useFormHandlersType.type"
import { ProductsDataType } from "../../types/ProductsAPI.type"

const useFormHandlers = ({
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
}: useFormHandlersType) => {
    const navigate = useNavigate()

    const handleReset = () => {
        reset()
        setImagesFile(null)
    }

    const handleSave = async () => {
        setLoading((prev) => ({ ...prev, save: true }))

        const isValid = await trigger()
        if (!isValid) {
            setMessageDialog({
                open: true,
                title: t('fail'),
                content: t('form_validation_fail'),
                type: 'error'
            })
            setLoading((prev) => ({ ...prev, save: false }))
            return
        }

        let imagesUrl = watch('images')
        if (!error && imageFile) {
            imagesUrl = await uploadImageToCloudinary(imageFile)
        }

        const payload = {
            id: watchedSKU,
            name: watchName,
            price: watchedPrice,
            qty: watchedQty,
            mainCategory: watchedMainCategory,
            subCategory: watchedSubCategory,
            status: watchedStatus,
            images: imagesUrl,
            updatedAt: new Date()
        }

        await fetch(`${PRODUCTS_API}/${watchedSKU}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        console.log(payload)

        setLoading((prev) => ({ ...prev, save: false }))
        setMessageDialog({
            open: true,
            title: t('success'),
            content: t('operation_completed'),
            type: 'success'
        })

    }

    const handleAdd = async () => {

        setLoading((prev) => ({ ...prev, add: true }))

        const isValid = await trigger()

        if (!isValid) {
            setMessageDialog({
                open: true,
                title: t('fail'),
                content: t('form_validation_fail'),
                type: 'error'
            })
            setLoading((prev) => ({ ...prev, add: false }))
            return
        }

        const res = await fetch(PRODUCTS_API)
        const existingProducts = await res.json()

        const currentSKU = watch('id')

        const skuExists = existingProducts.some((item: ProductsDataType) => item.id === currentSKU)
        if (skuExists) {
            setError('id', {
                type: 'manual',
                message: t('sku_already_exists')
            })
            setMessageDialog({
                open: true,
                title: t('fail'),
                content: t('form_validation_fail'),
                type: 'error'
            })
            setLoading((prev) => ({ ...prev, add: false }))
            return
        }

        let imagesUrl = watch('images')
        if (!error && imageFile) {
            imagesUrl = await uploadImageToCloudinary(imageFile)
        }

        const payload = {
            id: watchedSKU,
            name: watchName,
            price: watchedPrice,
            qty: watchedQty,
            mainCategory: watchedMainCategory,
            subCategory: watchedSubCategory,
            status: watchedStatus,
            images: imagesUrl,
            updatedAt: new Date()
        }

        await fetch(PRODUCTS_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        console.log(payload)

        setMessageDialog({
            open: true,
            title: t('success'),
            content: t('operation_completed'),
            type: 'success'
        })

        reset()
        setImagesFile(null)
        setLoading((prev) => ({ ...prev, add: false }))
    }

    const handleDelete = async () => {
        if (!watchedSKU) return
        setLoading((prev) => ({ ...prev, delete: true }))

        const isConfirmed = await showConfirmDialog({
            title: t('warning'),
            content: t("are_you_sure_you_want_to_delete_this_data"),
            type: 'warning'
        })

        if (!isConfirmed) {
            setLoading((prev) => ({ ...prev, delete: false }))
            return
        }

        try {
            const res = await fetch(`${PRODUCTS_API}/${watchedSKU}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' }
            })

            if (!res.ok) throw new Error('刪除失敗')

            setMessageDialog({
                open: true,
                title: t('success'),
                content: `SKU: ${watchedSKU} ${t('deleted')}`,
                type: 'success',
                onConfirm() {
                    setLoading((prev) => ({ ...prev, delete: false }))
                    navigate(-1)
                }
            })

            reset()
            setImagesFile(null)
        } catch (err) {
            setMessageDialog({
                open: true,
                title: t('error'),
                content: t('delete_fail'),
                type: 'error'
            })
        }
    }

    return {
        handleReset,
        handleSave,
        handleAdd,
        handleDelete
    }
}

export default useFormHandlers