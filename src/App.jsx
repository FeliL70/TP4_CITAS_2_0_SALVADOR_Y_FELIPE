import { useState, useEffect } from 'react'
import './App.css'
import Formulario from './modules/Formulario.jsx'
import CrearCita from './modules/Cita.jsx'

function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas')
    return citasGuardadas ? JSON.parse(citasGuardadas) : [
      { Nombre: "Cacho", Dueño: 'Tomi', Fecha: '2022-11-12', Hora: '16:26', Sintomas: 'Se lastimo una pata' },
      { Nombre: "Scooby", Dueño: 'Facu', Fecha: '2004-02-02', Hora: '03:43', Sintomas: 'Le duele el estomago' },
      { Nombre: "Cucki", Dueño: 'Feli', Fecha: '2012-04-15', Hora: '07:35', Sintomas: 'Vomitos' }
    ]
  })

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])

  const agregarCita = (cita) => {
    setCitas([...citas, cita])
  }

  const eliminarCita = (index) => {
    const nuevasCitas = [...citas]
    nuevasCitas.splice(index, 1)
    setCitas(nuevasCitas)
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario agregarCita={agregarCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map((cita, index) => (
              <CrearCita
                key={index}
                index={index}
                Nombre={cita.Nombre}
                Dueño={cita.Dueño}
                Fecha={cita.Fecha}
                Hora={cita.Hora}
                Sintomas={cita.Sintomas}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
