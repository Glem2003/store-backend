// type
import { messageDialog, showConfirmDialog } from "./useProductForm.type"

const useMessageDialog = ({
    setMessageDialog
}: {
    setMessageDialog: React.Dispatch<React.SetStateAction<messageDialog>>
}) => {

    const showConfirmDialog = (config: showConfirmDialog) => {
        return new Promise<boolean>((resolve) => {
            setMessageDialog({
                ...config,
                open: true,
                inquiry: true,
                type: config.type ?? 'info',
                onConfirm: () => {
                    setMessageDialog((prev) => ({ ...prev, open: false }))
                    resolve(true)
                },
                onCancel: () => {
                    setMessageDialog((prev) => ({ ...prev, open: false }))
                    resolve(false)
                }
            })
        })
    }

    const handleClose = () => {
        setMessageDialog((prev) => ({
            ...prev,
            open: false
        }))
    }

    return {
        showConfirmDialog,
        handleClose
    }
}

export default useMessageDialog