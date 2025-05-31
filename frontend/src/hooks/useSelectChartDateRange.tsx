import { useState } from "react"

// type
import { DateRange } from "../types/DateRange.type"

const useSelectChartDateRange = () => {
    const [isActive, setActive] = useState<DateRange>('weekly')

    const handleClick = (value: DateRange) => {
        setActive(value)
    }

    return { isActive, handleClick }

}

export default useSelectChartDateRange