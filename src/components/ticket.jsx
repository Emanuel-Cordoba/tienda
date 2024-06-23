import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Ticket = () => {
  const location = useLocation();
  const { allProducts, total } = location.state || { allProducts: [], total: 0 };

  return (
    <div id="ticket-container">
      <div id="d1">
        <h1 id="t1">Compra Confirmada</h1>
        <p id="p1">Gracias por tu compra.</p>
        <h2 id="sub1">Resumen de la compra:</h2>
        <ul id="productos">
          {allProducts.map(product => (
            <li key={product.id}>
              {product.quantity} x {product.nameProduct} - ${product.price}
            </li>
          ))}
        </ul>
        <h3>Total: ${total}</h3>
      </div>
      <div id="button-container">
        <Link to="/">
          <button className="btn-volver">Volver a la Tienda</button>
        </Link>
      </div>
    </div>
  );
};

export default Ticket;
