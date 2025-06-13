// components
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material"

// type
import { MessageDialogType } from "./messageDialog.type"

// hooks
import { useTranslation } from "react-i18next"

const MessageDialog: React.FC<MessageDialogType> = (props) => {

    const {
        open,
        onClose,
        title,
        content,
        type = 'info',
        inquiry = false,
        onCancel,
        onConfirm
    } = props

    const { t } = useTranslation()

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle color={type}>{title}</DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                {inquiry ? (
                    <>
                        <Button color="error" onClick={onConfirm}>{(t('confirm'))}</Button>
                        <Button onClick={onCancel}>{t('cancel')}</Button>
                    </>
                ) : (
                    <Button onClick={onConfirm || onClose}>{t('close')}</Button>
                )}
            </DialogActions>
        </Dialog>
    )
}

export default MessageDialog