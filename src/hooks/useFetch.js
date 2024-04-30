import React, { useEffect, useState } from 'react'
import { fetchApiData } from '../utils/api'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        fetchApiData()

        fetchApiData(url)
            .then((res) => {
                setLoading(false)
                setData(res)
            })
            .catch((err) => {
                setError(err)
            })
    }, [url])

    return { data, loading, error }
}

export default useFetch
