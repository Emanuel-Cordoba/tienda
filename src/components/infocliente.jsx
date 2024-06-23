import React from 'react';

const InfoCliente = () => {
  return (
    <div className="info-cliente">
      <h2>Información del Cliente</h2>
      <form>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />
        </div>
        <div>
        <label htmlFor="dni">DNI:</label>
        <input type="number" id="dni" name="dni" inputMode="numeric" required />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required />
        </div>
        <div>
          <label htmlFor="codigo-postal">Código Postal:</label>
          <input type="text" id="codigo-postal" name="codigo-postal" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default InfoCliente;
