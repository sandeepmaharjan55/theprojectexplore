import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useDestinationSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [destinations, setDestinations] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setDestinations([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'http://localhost:7000/api/destination/listnoauth',
      params: { limit: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
        console.log(res.data);
      setDestinations(prevDestinations => {
        return [...new Set([...prevDestinations, ...res.data.data.map(b => b.name)])]
      })
      setHasMore(res.data.data.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, destinations, hasMore }
}