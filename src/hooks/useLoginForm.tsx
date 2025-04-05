import { useState } from "react"

const useLoginForm = () => {

    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogin = (
        onError: (msg: string | null) => void,
        onSuccess?: () => void
    ) => {

        if (!userName || !password) {
            onError('userName OR password is WRONG!!')
            return
        }

        setLoading(true)

        setTimeout(() => {
            console.log(`${userName}\n${password}`) // debug log
            setUserName('')
            setPassword('')
            setLoading(false)
            onSuccess && onSuccess()
        }, 2000)

    }

    return {
        userName,
        password,
        loading,
        setUserName,
        setPassword,
        handleLogin,
    }
}

export default useLoginForm