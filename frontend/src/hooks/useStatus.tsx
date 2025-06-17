// hooks
import { useState } from "react"

// type
import { loadingObject, messageDialog } from "./types/useMessageDialog.type"

const useStatus = () => {

    const [loading, setLoading] = useState<loadingObject>({
        save: false,
        add: false,
        delete: false
    })

    const [messageDialog, setMessageDialog] = useState<messageDialog>({
        open: false,
        title: '',
        content: '',
        type: 'info',
        inquiry: false,
        onConfirm: undefined,
        onCancel: undefined
    })

    return {
        loading,
        setLoading,
        messageDialog,
        setMessageDialog
    }
}

export default useStatus