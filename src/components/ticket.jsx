import React from 'react';
import { useLocation } from 'react-router-dom';

const Ticket = () => {
  const location = useLocation();
  const { allProducts, total } = location.state || { allProducts: [], total: 0 };

  return (
    <div>
      <h1>Compra Confirmada</h1>
      <p>Gracias por tu compra.</p>
      <h2>Resumen de la compra:</h2>
      <ul>
        {allProducts.map(product => (
          <li key={product.id}>
            {product.quantity} x {product.nameProduct} - ${product.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Ticket;
