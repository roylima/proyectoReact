import React from 'react';
import { Table } from 'reactstrap';

const MiTabla1Python = () => {
  return (
    <div className="container mt-4">
      <Table striped>
        <thead>
          <tr>
            <th>Tipo de Dato</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>int</td>
            <td>Almacena números enteros (ej. 1, -3, 100)</td>
          </tr>
          <tr>
            <td>float</td>
            <td>Almacena números decimales (ej. 3.14, -0.1, 100.99)</td>
          </tr>
          <tr>
            <td>str</td>
            <td>Almacena cadenas de texto (ej. "Hola Mundo")</td>
          </tr>
          <tr>
            <td>bool</td>
            <td>Almacena valores de verdadero o falso (ej. True, False)</td>
          </tr>
          <tr>
            <td>list</td>
            <td>Almacena colecciones ordenadas de elementos (ej. [1, 2, 3])</td>
          </tr>
        </tbody>
      </Table>
      
    </div>
  );
};

export default MiTabla1Python;
