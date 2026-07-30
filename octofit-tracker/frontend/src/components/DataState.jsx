export function DataState({ loading, error, emptyMessage, children }) {
  if (loading) {
    return <p className="status-text">Loading...</p>
  }

  if (error) {
    return <p className="status-text text-danger">{error}</p>
  }

  if (!children || children.length === 0) {
    return <p className="status-text">{emptyMessage}</p>
  }

  return children
}