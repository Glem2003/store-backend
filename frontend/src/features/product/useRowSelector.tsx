import { useState } from "react"

// type
import { GridEventListener } from "@mui/x-data-grid"

const useRowSelector = () => {

    const [rowDataId, setRowDataId] = useState<number | null>(null)

    const handleSelect: GridEventListener<'rowClick'> = (params) => {
        if (params.id === rowDataId) {
            setRowDataId(null) // Cancel
        } else {
            setRowDataId(params.id as number)
        }
    }

    return {
        rowDataId,
        handleSelect
    }
}

export default useRowSelector