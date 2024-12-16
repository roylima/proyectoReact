import React from 'react';
import { Table } from 'reactstrap';

const TipoDeDatoTabla = () => {
  return (
    <div className="container mt-4">
      <Table striped>
        <thead>
          <tr>
            <th>TIPOS DE DATO </th>
            <th>DESCRIPCION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>int</td>
            <td>almacena números enteros</td>
          </tr>
          <tr>
            <td>float</td>
            <td>almacena números decimales con precisión de 32 bits</td>
          </tr>
          <tr>
            <td>double</td>
            <td>almacena números decimales con precisión de 64 bits</td>
          </tr>
          <tr>
            <td>boolean</td>
            <td>Puedes tener solo dos valores: true o false</td>
          </tr>
          <tr>
            <td>char</td>
            <td>Representa un carácter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TipoDeDatoTabla;
