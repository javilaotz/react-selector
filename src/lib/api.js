import { useState, useEffect } from 'react'
/* import { mock } from './mockedApi' */

const fetchData = () => {
    const result = fetch('https://607a85e9bd56a60017ba2bb8.mockapi.io/api/v1/songs')
    .then(response => response.json())
    .then(data => data)
    return result
}

export const useFetchData = () => {
    const [songs, setSongs] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    
    useEffect(() => {
        const updateData = async () => {
            const data = await fetchData()
            setSongs(data)
            setIsFetched(true)
        }
        !isFetched && updateData()
    }, [isFetched])

    return [songs, isFetched]
}