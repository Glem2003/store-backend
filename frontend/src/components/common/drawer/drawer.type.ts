export interface menuDrawerProp {
    anchor?: "top" | "right" | "bottom" | "left"
    children?: React.ReactNode
    open: boolean
    onClose?: () => void
}