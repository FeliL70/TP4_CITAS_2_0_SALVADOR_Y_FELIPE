import React from 'react';

const CrearCita = (props) => {
  const { index, Nombre, Dueño, Fecha, Hora, Sintomas, eliminarCita } = props;

  const BotonEliminar = () => {
    eliminarCita(index);
  };

  return (
    <div className="cita">
      <p>Mascota: <span>{Nombre}</span></p>
      <p>Dueño: <span>{Dueño}</span></p>
      <p>Fecha: <span>{Fecha}</span></p>
      <p>Hora: <span>{Hora}</span></p>
      <p>Sintomas: <span>{Sintomas}</span></p>

      <button className='button eliminar' onClick={BotonEliminar}>
        Eliminar X
      </button>
    </div>
  );
};

export default CrearCita;
