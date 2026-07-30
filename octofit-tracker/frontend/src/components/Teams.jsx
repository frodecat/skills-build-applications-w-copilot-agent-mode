import { DataState } from './DataState.jsx'
import { useCollection } from './useCollection.js'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : '/api/teams/'

function Teams() {
  const { items: teams, loading, error } = useCollection('teams', teamsEndpoint)

  return (
    <section className="content-panel">
      <h1>Teams</h1>
      <DataState loading={loading} error={error} emptyMessage="No teams found.">
        <div className="resource-grid">
          {teams.map((team) => (
            <article className="resource-card" key={team._id || team.name}>
              <h2>{team.name}</h2>
              <p>{team.city}</p>
              <dl>
                <div><dt>Mascot</dt><dd>{team.mascot}</dd></div>
                <div><dt>Members</dt><dd>{team.memberCount}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </DataState>
    </section>
  )
}

export default Teams