// config
import { CLOUDINARY_API } from "../config/apiConfig"

const uploadImageToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "store_backend")

    const response = await fetch(CLOUDINARY_API, {
        method: "POST",
        body: formData
    })

    if (!response.ok) throw new Error("Images upload fail")

    const data = await response.json()
    return data.secure_url
}

export default uploadImageToCloudinary 