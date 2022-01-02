import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useDestinationSearch(limitNumber, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [destinations, setDestinations] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setDestinations([])
  }, [limitNumber])

  // let loginData = {
  //   id: 'foo',
  //   role: 'bar',
  //   email:'a@a.com',
  // };

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'http://localhost:7000/api/destination/listnoauth',
      params: { limit: limitNumber, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
       // console.log(res.data);
      setDestinations(prevDestinations => {
        return [...new Set([...prevDestinations, ...res.data.data])]
      })
      console.log(destinations);
      setHasMore(res.data.data.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [limitNumber, pageNumber])

  return { loading, error, destinations, hasMore }
}