// hooks
import { useState } from "react"

// config
import { loginSetting } from "../config/loginSetting"

const useLoginForm = () => {

    const [userName, setUserName] = useState<string>(loginSetting.userName)
    const [password, setPassword] = useState<string>(loginSetting.password)
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

        if (userName !== loginSetting.userName || password !== loginSetting.password) {
            onError('Wrong user or password')
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