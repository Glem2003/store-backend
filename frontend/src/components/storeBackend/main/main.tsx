// components
import { Card } from "@mui/material"

// type
import { mainProps } from "./main.type"

const Main: React.FC<mainProps> = (props) => {

    const { children } = props

    return (
        <Card
            raised
            sx={{ height: 'calc( 100% - 10px )', overflowY: 'auto' }}
        >
            {children}
        </Card>
    )
}

export default Main