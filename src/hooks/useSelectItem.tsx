// hooks
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// data
import { pathToItemMap, itemToPathMap } from "../data/locationPath";
import { documentTitle } from "../data/documentTitle";

const useSelectItem = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [selectedItem, setSelectedItem] = useState<string>('')
    const [drawerControl, setDrawerControl] = useState<boolean>(false)

    const handleSelect = (value: string) => {
        setSelectedItem(value)
        const targetPath = itemToPathMap[value]
        if (targetPath) navigate(targetPath)
    }

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedItem(newValue)
        const targetPath = itemToPathMap[newValue]
        if (targetPath) navigate(targetPath)
    };

    const handleClose = () => {
        setDrawerControl(prev => !prev)
    };

    // add more btn and close menu
    useEffect(() => {
        if (selectedItem !== 'more') {
            setDrawerControl(false)
        }
    }, [selectedItem])

    // document title
    useEffect(() => {
        const title = documentTitle[selectedItem] || 'Store Backend'
        document.title = title
    }, [selectedItem])

    useEffect(() => {
        const current = pathToItemMap[location.pathname]
        if (current) setSelectedItem(current)
    }, [location.pathname])

    return {
        selectedItem,
        setSelectedItem,
        handleSelect,
        handleChange,
        drawerControl,
        setDrawerControl,
        handleClose
    }
}

export default useSelectItem