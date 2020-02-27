import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'

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

  if (loading) return <Preloader />

  return (
    <ul className="collection with-header">
      <li className="collection-header center">
        <h4>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs showing.</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  )
}

export default Logs
