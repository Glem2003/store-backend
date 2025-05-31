import { useState } from "react"

const useLoginForm = () => {

    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);

    const time = 1000

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
        }, time)

    }

    const handleSignOut = (
        onSuccess?: () => void
    ) => {

        setLoading(true)
        setTimeout(() => {
            onSuccess && onSuccess()
            setLoading(false)
        }, time)
    }

    return {
        userName,
        password,
        loading,
        setUserName,
        setPassword,
        handleLogin,
        handleSignOut
    }
}

export default useLoginForm