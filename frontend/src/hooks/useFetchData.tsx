import { useState, useEffect } from "react"

const useFetchData = <T,>(route: string): { data: T | null; loading: boolean; error: string | null } => {

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)
            setError(null)

            try {
                const res = await fetch(`${route}`)

                if (!res.ok) throw new Error(`HTTP error ${res.status}`)
                const data: T = await res.json()
                setData(data)
            }
            catch (err: any) {
                console.error(`[useFetchData] ${route}`, err)
                setError(err.message) // Failed to fetch
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [route])

    return { data, loading, error }
}

export default useFetchData