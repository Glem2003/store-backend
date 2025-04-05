import { useState, useEffect } from "react"

const useLoginAlert = () => {

    const [error, setError] = useState<string | null>(null)
    const [alertShow, setAlertShow] = useState<boolean>(false)

    const handleClose = () => {
        setAlertShow(prev => !prev)
        setError(null)
    }

    useEffect(() => {
        if (error) {
            setAlertShow(true)
        }
    }, [error])

    return {
        error,
        setError,
        alertShow,
        setAlertShow,
        handleClose
    }
}

export default useLoginAlert 