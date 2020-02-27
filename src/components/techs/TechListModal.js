import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'

const Techs = () => {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  const getTechs = async () => {
    setLoading(true)
    const res = await fetch('/techs')
    const data = await res.json()
    setTechs(data)
    setLoading(false)
  }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs.length === 0 ? (
            <li className="collection-item">
              There are no technicians available.
            </li>
          ) : (
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
    </div>
  )
}

export default Techs
