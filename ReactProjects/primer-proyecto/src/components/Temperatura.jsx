import React, {useState} from 'react'

export const Temperatura = () => {

    const [temperatura, setTemperatura] = useState(18)
    const Subir = () =>{
        setTemperatura(temperatura+1)
    }
    const Bajar = () =>{
        setTemperatura(temperatura-1)
    }

  return (
    <div className="container">
        <h2>La temperatura es : {temperatura} </h2>
        <p>
            {
                temperatura > 21 ? 'Hace Calor' : 'Hace Frio'
            }
        </p>
        <button className="btn btn-success btn-block" onClick={Subir}>Aumentar temperatura</button>
        <button className="btn btn-danger btn-block" onClick={Bajar}>Reducir temperatura</button>
    </div>
  )
}
