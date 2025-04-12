// hooks
import { useState } from "react";

const useSelectItem = () => {

    const [selectedItem, setSelectedItem] = useState<string>('store-ops-home')

    const handleSelect = (value: string) => {
        setSelectedItem(value)
    }

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedItem(newValue);
    };

    return {
        selectedItem,
        setSelectedItem,
        handleSelect,
        handleChange
    }
}

export default useSelectItem