import { DataState } from './DataState.jsx'
import { useCollection } from './useCollection.js'

function Activities() {
  const { items: activities, loading, error } = useCollection('activities', '/api/activities/')

  return (
    <section className="content-panel">
      <h1>Activities</h1>
      <DataState loading={loading} error={error} emptyMessage="No activities found.">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Activity</th>
                <th>User</th>
                <th>Minutes</th>
                <th>Calories</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity._id || `${activity.userEmail}-${activity.activityDate}`}>
                  <td>{activity.type}</td>
                  <td>{activity.userEmail}</td>
                  <td>{activity.durationMinutes}</td>
                  <td>{activity.caloriesBurned}</td>
                  <td>{new Date(activity.activityDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DataState>
    </section>
  )
}

export default Activities