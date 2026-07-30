import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export function useCollection(collectionName) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadItems() {
      try {
        const nextItems = await fetchCollection(collectionName)

        if (!ignore) {
          setItems(nextItems)
          setError('')
        }
      } catch (loadError) {
        if (!ignore) {
          setError(loadError instanceof Error ? loadError.message : 'Unable to load data')
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadItems()

    return () => {
      ignore = true
    }
  }, [collectionName])

  return { items, loading, error }
}