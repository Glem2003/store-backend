// hooks
import { useState, useEffect, useCallback } from "react"

// type
import { categoriesType } from "../types/categoriesType.type"
import uploadImageToCloudinary from "../utils/uploadImageToCloudinary"

// data
import ProductsData from "../data/productsData";

// config
import { PRODUCTS_API } from "../config/apiConfig"

const useProductForm = () => {

    const { data } = ProductsData()

    /*
      * id: isSKU
      * name: isProductName
      * price: isPrice
      * qty: isQuantity
      * mainCategory: mainCategory
      * subCategory: subCategory
      * status: isActive
      * images: imagesUrl
      * updatedAt: new Date()
     */

    const [isSKU, setSKU] = useState<string>('')
    const [isProductName, setProductName] = useState<string>('')
    const [isPrice, setPrice] = useState<string>('0')
    const [isQuantity, setQuantity] = useState<string>('0')
    const [categoryOptions, setCategoryOptions] = useState<categoriesType>({})
    const [mainCategory, setMainCategory] = useState<string>('')
    const [subCategory, setSubCategory] = useState<string>('')
    const [isActive, setActive] = useState<boolean>(true)
    const [image, setImage] = useState<string | null>(null)
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

    const handleToggle = () => {
        setActive(prev => !prev)
    }

    const handleMainCategoryChange = (value: string) => {
        setMainCategory(value)
        setSubCategory('')

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
        if (file) {
            setImagesFile(file)
            const reader = new FileReader()
            reader.onload = () => {
                setImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSave = async () => {
        try {

            let imagesUrl = ''
            if (imageFile) {
                imagesUrl = await uploadImageToCloudinary(imageFile)
            }

            const payload = {
                id: isSKU,
                name: isProductName,
                price: isPrice,
                qty: isQuantity,
                mainCategory: mainCategory,
                subCategory: subCategory,
                state: isActive,
                images: imagesUrl,
                updatedAt: new Date()
            }

            await fetch(PRODUCTS_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            console.log(payload)
        }
        catch (err) {
            console.error(err)
        }
        finally {
            setSKU('')
            setProductName('')
            setPrice('0')
            setQuantity('0')
            setMainCategory('')
            setSubCategory('')
            setActive(true)
            setImage(null)
            setImagesFile(null)
        }
    }

    const handleReset = () => {
        setSKU('')
        setProductName('')
        setPrice('0')
        setQuantity('0')
        setMainCategory('')
        setSubCategory('')
        setActive(true)
        setImage(null)
        setImagesFile(null)
    }

    const getFormDataFromId = useCallback(async (id: string) => {
        try {
            const res = await fetch(`${PRODUCTS_API}/${id}`)
            if (!res.ok) throw new Error("Https Error");

            const data = await res.json()
            console.log(data.images)

            setSKU(data.id)
            setProductName(data.name)
            setPrice(data.price)
            setQuantity(data.qty)
            setMainCategory(data.mainCategory)
            setSubCategory(data.subCategory)
            setImage(data.images)
            setActive(data.status)
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    useEffect(() => {
        if (!Array.isArray(data)) return
        const category = convertToArray(data)

        setCategoryOptions(prev => {
            const isEqual = JSON.stringify(prev) === JSON.stringify(category)
            return isEqual ? prev : category
        })

    }, [data])

    return {
        isSKU,
        isProductName,
        isPrice,
        isQuantity,
        categoryOptions,
        mainCategory,
        subCategory,
        isActive,
        image,
        imageFile,
        setSKU,
        setProductName,
        setPrice,
        setQuantity,
        setMainCategory,
        setSubCategory,
        setActive,
        setImage,
        setImagesFile,
        getFormDataFromId,
        handleToggle,
        handleMainCategoryChange,
        handleImageChange,
        handleSave,
        handleReset
    }

}

export default useProductForm