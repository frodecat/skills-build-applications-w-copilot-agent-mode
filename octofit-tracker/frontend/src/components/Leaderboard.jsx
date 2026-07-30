import { DataState } from './DataState.jsx'
import { useCollection } from './useCollection.js'

function Leaderboard() {
  const { items: leaderboard, loading, error } = useCollection('leaderboard')

  return (
    <section className="content-panel">
      <h1>Leaderboard</h1>
      <DataState loading={loading} error={error} emptyMessage="No leaderboard entries found.">
        <div className="leaderboard-list">
          {leaderboard.map((entry) => (
            <article className="leaderboard-row" key={entry._id || entry.userEmail}>
              <strong>#{entry.rank}</strong>
              <span>{entry.userEmail}</span>
              <span>{entry.points} pts</span>
              <span>{entry.weeklyMinutes} min</span>
            </article>
          ))}
        </div>
      </DataState>
    </section>
  )
}

export default Leaderboard