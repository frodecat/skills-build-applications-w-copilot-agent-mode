import { DataState } from './DataState.jsx'
import { useCollection } from './useCollection.js'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : '/api/users/'

function Users() {
  const { items: users, loading, error } = useCollection('users', usersEndpoint)

  return (
    <section className="content-panel">
      <h1>Users</h1>
      <DataState loading={loading} error={error} emptyMessage="No users found.">
        <div className="resource-grid">
          {users.map((user) => (
            <article className="resource-card" key={user._id || user.email}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <dl>
                <div><dt>Role</dt><dd>{user.role}</dd></div>
                <div><dt>Team</dt><dd>{user.teamName}</dd></div>
                <div><dt>Age</dt><dd>{user.age}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </DataState>
    </section>
  )
}

export default Users