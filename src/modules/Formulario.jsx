import React from 'react';

function Formulario({ agregarCita }) {

  const EnviarDatos = (e) => {
    e.preventDefault();
    const form = e.target;
    const nuevaCita = {
      Nombre: form.Nombre.value,
      Dueño: form.Dueño.value,
      Fecha: form.Fecha.value,
      Hora: form.Hora.value,
      Sintomas: form.Sintomas.value
    };
    agregarCita(nuevaCita);
    form.reset();
  };

  return (
    <form onSubmit={EnviarDatos}>
      <label>Nombre Mascota</label>
      <input type="text" name="Nombre"className="u-full-width" placeholder="Nombre Mascota"/>
      <label>Nombre Dueño</label>
      <input type="text" name="Dueño" className="u-full-width" placeholder="Nombre dueño de la mascota"/>
      <label>Fecha</label>
      <input type="date" name="Fecha" className="u-full-width"/>
      <label>Hora</label>
      <input type="time" name="Hora" ClassName="u-full-width"/>
      <label>Sintomas</label>
      <textarea name="Sintomas" className="u-full-width" ></textarea>
      <button type="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>
    </form>
  );
}

export default Formulario;

