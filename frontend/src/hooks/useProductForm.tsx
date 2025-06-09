// hooks
import { useState, useEffect, useCallback } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

// type
import { categoriesType } from "../types/categoriesType.type"
import { productsDataType } from "../types/ProductsAPI.type"
import uploadImageToCloudinary from "../utils/uploadImageToCloudinary"

// data
import ProductsData from "../data/productsData";

// config
import { PRODUCTS_API } from "../config/apiConfig"

const useProductForm = () => {

    const { data, error, loading } = ProductsData()

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

    const navigate = useNavigate()

    const watchedSKU = watch('id')
    const watchName = watch('name')
    const watchedPrice = watch('price')
    const watchedQty = watch('qty')
    const watchedStatus = watch('status')
    const watchedMainCategory = watch('mainCategory')
    const watchedSubCategory = watch('subCategory')
    const watchedImages = watch('images')

    const [categoryOptions, setCategoryOptions] = useState<categoriesType>({})
    const [imageFile, setImagesFile] = useState<File | null>(null)

    const convertToArray = (data: any) => {
        const categoryMap: Record<string, Set<string>> = {}
        for (const { mainCategory, subCategory } of data) {
            if (!mainCategory || !subCategory) continue
            if (!categoryMap[mainCategory]) {
                categoryMap[mainCategory] = new Set()
            }
            categoryMap[mainCategory].add(subCategory)
        }

        const result: Record<string, string[]> = {}
        for (const [main, subSet] of Object.entries(categoryMap)) {
            result[main] = Array.from(subSet)
        }
        return result
    }

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

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (!file) return

        const reader = new FileReader()
        reader.onload = () => {
            const base64 = reader.result as string
            setValue("images", base64)
            setImagesFile(file)
        }
        reader.onerror = (error) => {
            console.log('FileReader error:', error)
        }
        reader.readAsDataURL(file)
        if (file) {
            setImagesFile(file)
            const reader = new FileReader()
            reader.onload = () => {
                setValue("images", reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleAdd = async () => {

        const isValid = await trigger()

        if (!isValid) {
            console.warn('表單驗證失敗，停止儲存')
            return
        }

        const res = await fetch(PRODUCTS_API)
        const existingProducts = await res.json()

        const currentSKU = watch('id')

        const skuExists = existingProducts.some((item: productsDataType) => item.id === currentSKU)
        if (skuExists) {
            setError('id', {
                type: 'manual',
                message: t('sku_already_exists')
            })
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
        alert('新增成功')

        navigate('/backend/products')
        reset()
        setImagesFile(null)
    }

    const handleSave = async () => {

        const isValid = await trigger()

        if (!isValid) {
            console.warn('表單驗證失敗，停止儲存')
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

        alert('成功')
        navigate('/backend/products')
    }

    const handleReset = () => {
        reset()
        setImagesFile(null)
    }

    const handleDelete = async () => {

        if (!watchedSKU) return

        try {
            const confirmDelete = window.confirm(t("are_you_sure_you_want_to_delete_this_data"))
            if (!confirmDelete) return

            const res = await fetch(`${PRODUCTS_API}/${watchedSKU}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' }
            })

            if (!res.ok) throw new Error('刪除失敗')

            alert(`SKU: ${watchedSKU} 已刪除`)
            navigate('/backend/products')
            reset()
            setImagesFile(null)
        }
        catch (err) {
            console.log(err)
        }
    }

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

    useEffect(() => {
        if (!Array.isArray(data)) return
        const category = convertToArray(data)

        setCategoryOptions(prev => {
            const isEqual = JSON.stringify(prev) === JSON.stringify(category)
            return isEqual ? prev : category
        })

    }, [data])

    return {
        register,
        setValue,
        reset,
        control,
        errors,
        watchedSKU,
        watchName,
        watchedPrice,
        watchedQty,
        watchedStatus,
        watchedMainCategory,
        watchedSubCategory,
        watchedImages,

        categoryOptions,
        imageFile,
        error,
        loading,

        setImagesFile,

        getFormDataFromId,
        handleMainCategoryChange,
        handleImageChange,
        handleAdd,
        handleSave,
        handleReset,
        handleDelete
    }

}

export default useProductForm