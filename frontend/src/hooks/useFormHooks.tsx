// hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// type
import { GridEventListener } from "@mui/x-data-grid"

const useFormHooks = () => {

    const [rowDataId, setRowDataId] = useState<number | null>(null)

    const navigate = useNavigate()

    const handleBtnAdd = () => navigate('revision/add')
    const handleBtnEdit = (id: number) => navigate(`revision/edit/${id}`)
    const handleSelect: GridEventListener<'rowClick'> = (params) => {
        if (params.id === rowDataId) {
            setRowDataId(null) // Cancel
        } else {
            setRowDataId(params.id as number)
        }
    }
    const handleCancel = () => navigate(-1)


    return { rowDataId, setRowDataId, handleBtnAdd, handleBtnEdit, handleSelect, handleCancel }

}
export default useFormHooks