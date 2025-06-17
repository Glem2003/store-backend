export type type = 'success' | 'error' | 'info' | 'warning'

export interface MessageDialogType {
    open: boolean
    onClose?: () => void
    title?: string
    content: string
    type?: type,
    onConfirm?: () => void
    onCancel?: () => void
    inquiry?: boolean
}