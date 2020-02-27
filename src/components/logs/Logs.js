import React, { useState, useEffect } from 'react'

const Logs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLogs()
    // eslint-disable-next-line
  }, [])

  const getLogs = async () => {
    const res = await fetch('/logs')
    const data = await res.json()
    setLogs(data)
    setLoading(false)
  }

  if (loading) return <h4>Loading...</h4>

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs showing.</p>
      ) : (
        logs.map(log => (
          <li key={log.id} className="collection-item">
            {log.message}
          </li>
        ))
      )}
    </ul>
  )
}

export default Logs
