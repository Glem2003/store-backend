// hooks
import { useState } from "react"

// type
import { UseFormSetValue } from "react-hook-form"
import { ProductsDataType } from "../../types/ProductsAPI.type"

const useImageHandler = ({
    setValue
}: {
    setValue: UseFormSetValue<ProductsDataType>
}) => {

    const [imageFile, setImagesFile] = useState<File | null>(null)

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
    }

    return {
        imageFile, setImagesFile,handleImageChange
    }
}

export default useImageHandler