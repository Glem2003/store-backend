// type
import { type } from "../../components/common/dialog/messageDialog.type"

export interface loadingObject {
    save: boolean,
    add: boolean,
    delete: boolean
}

export interface messageDialog {
    open: boolean,
    title: string,
    content: string,
    type: type,
    inquiry?: boolean,
    isContinue?: boolean,
    onConfirm?: () => void,
    onCancel?: () => void
}

export interface showConfirmDialog {
    title: string
    content: string
    type?: type
}