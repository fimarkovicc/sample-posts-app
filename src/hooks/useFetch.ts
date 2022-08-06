import { useState, useEffect } from 'react'

function useFetch(url: string){
    const [data, setData] = useState(null)

    useEffect(() => {
        const abortCtrl = new AbortController()

        fetch(url, { signal: abortCtrl.signal })
            .then(res => {
                if(!res.ok) throw Error('Error fetching data.')
                return res.json()
            })
            .then(data => setData(data))
            .catch(err => {console.log(err)})

        return () => abortCtrl.abort()
    }, [url])

    return {data}
}

export default useFetch