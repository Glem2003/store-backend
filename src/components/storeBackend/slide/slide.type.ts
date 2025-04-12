export interface slideProps {
    selected: string
    handleListBtn?: (value:string) => void
    onChange?: (event: React.SyntheticEvent, newValue: string) => void
}