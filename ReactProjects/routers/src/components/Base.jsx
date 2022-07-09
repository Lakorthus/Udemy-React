import React, {useState, useEffect} from 'react'

const Base = () => {
  const [nombre, setNombre] =  useState('Pedro')
  useEffect( ()=>{
      setTimeout(()=>{
        setNombre('Manuel') 
      },2000) // 2 segundos
  })

  return (
    <div>
        <h1>Pagina de base ruta /</h1>
        {nombre}
    </div>
  )
}

export default Base