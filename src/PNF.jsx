import React from 'react'
import { useNavigate } from 'react-router-dom'
const PNF = () => {
    const navigate = useNavigate()
    navigate('/')
  return (
    <div>Page not foud</div>
  )
}

export default PNF