interface NavItem {
    text: string;
    icon?: React.ReactNode;
    submodule?: string[];
    value?:string
}

export interface NavListsProp {
    title?: string
    list?: NavItem[]
    selected: string
    handleListBtn?: (value:string) => void
}