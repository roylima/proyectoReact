import React from 'react';
import { Table } from 'reactstrap';

const MiTabla2 = () => {
  return (
    <div className="container mt-4">
      <Table striped>
        <thead>
          <tr>
            <th>Operador</th>
            <th>Nombre</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&#61;&#61;</td> 
            <td>igual que</td>
            <td>x &#61;&#61; y</td>
          </tr>
          <tr>
            <td>&#33;&#61;</td> 
            <td>no es igual que</td>
            <td>x &#33;&#61; y</td>
          </tr>
          <tr>
            <td>&gt;</td> 
            <td>mayor que</td>
            <td>x &gt; y</td>
          </tr>
          <tr>
            <td>&lt;</td> 
            <td>menor que</td>
            <td>x &lt; y</td>
          </tr>
          <tr>
            <td>&#62;&#61;</td>
            <td>mayor o igual que</td>
            <td>x &#62;&#61; y</td>
          </tr>
          <tr>
            <td>&#60;&#61;</td> 
            <td>menor o igual que</td>
            <td>x &#60;&#61; y</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MiTabla2;
