export interface BottomNavProp {
    value?: string
    onChange?: (event: React.SyntheticEvent, newValue: string) => void
    sx: object
    handleOnClose?: () => void
}