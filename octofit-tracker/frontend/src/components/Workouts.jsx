import { DataState } from './DataState.jsx'
import { useCollection } from './useCollection.js'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : '/api/workouts/'

function Workouts() {
  const { items: workouts, loading, error } = useCollection('workouts', workoutsEndpoint)

  return (
    <section className="content-panel">
      <h1>Workouts</h1>
      <DataState loading={loading} error={error} emptyMessage="No workouts found.">
        <div className="resource-grid">
          {workouts.map((workout) => (
            <article className="resource-card" key={workout._id || workout.title}>
              <h2>{workout.title}</h2>
              <p>{workout.focus} · {workout.difficulty}</p>
              <dl>
                <div><dt>Duration</dt><dd>{workout.durationMinutes} min</dd></div>
              </dl>
              <ul className="exercise-list">
                {(workout.exercises || []).map((exercise) => (
                  <li key={exercise}>{exercise}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </DataState>
    </section>
  )
}

export default Workouts