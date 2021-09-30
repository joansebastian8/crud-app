import React from 'react';
import { Alert } from 'reactstrap';

const PaginaNoEncontrada = () => (
  <div data-testid="PaginaNoEncontrada">
    <Alert color="info" className='text-center'>
      No se encontró la página <br />
      <a href='/users'>Ir a usuarios</a>
    </Alert>
  </div>
);


export default PaginaNoEncontrada;
