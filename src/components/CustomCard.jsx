import React from 'react';
import "./CustomCard.css";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function CustomCard() {
  return (
    <div className='customCard'>
      <Card style={{ width: '18rem' }}>
        <img alt="Python" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2To8E0k0NeOfRqgWOwPje8tHwNtQOStw2w&s" />
        <CardBody>
          <CardTitle tag="h5">Python</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Lenguaje Interpretado
          </CardSubtitle>
          <CardText>
            <p>Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. Fue creado por Guido van Rossum y su sintaxis sencilla lo hace muy popular en la enseñanza de programación. Se utiliza en una amplia variedad de aplicaciones, desde desarrollo web hasta análisis de datos y inteligencia artificial. Python es conocido por su enorme comunidad y la amplia cantidad de bibliotecas que facilita el desarrollo.</p>
          </CardText>
        </CardBody>
      </Card>
      <Card style={{ width: '18rem' }}>
        <img alt="Java" src="https://okhosting.com/wp-content/uploads/2019/01/java.jpg" />
        <CardBody>
          <CardTitle tag="h5">Java</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Lenguaje Compilado
          </CardSubtitle>
          <CardText>
            <p>Java es un lenguaje de programación orientado a objetos desarrollado por Sun Microsystems, ahora propiedad de Oracle. Es uno de los lenguajes más utilizados para aplicaciones empresariales, desarrollo web y aplicaciones móviles, especialmente para dispositivos Android. Java se destaca por su principio "escribe una vez, ejecuta en cualquier lugar", lo que significa que el código puede ejecutarse en cualquier plataforma que tenga la Java Virtual Machine (JVM).</p>
          </CardText>
        </CardBody>
      </Card>
      <Card style={{ width: '18rem' }}>
        <img alt="C#" src="https://teorema-rd.com/wp-content/uploads/2024/07/csharp-800x445-1.jpg" />
        <CardBody>
          <CardTitle tag="h5">C#</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Lenguaje Compilado
          </CardSubtitle>
          <CardText>
            <p>C# (C-Sharp) es un lenguaje de programación orientado a objetos desarrollado por Microsoft como parte de su plataforma .NET. Su sintaxis es similar a la de C++ y Java, pero es más fácil de aprender y utilizar. C# es utilizado en el desarrollo de aplicaciones de escritorio, juegos (con Unity), y servicios web, y es uno de los lenguajes preferidos en entornos de Microsoft debido a su integración con el ecosistema de .NET.</p>
          </CardText>
        </CardBody>
      </Card>
      <Card style={{ width: '18rem' }}>
        <img alt="JavaScript" src="https://www.pragimtech.com/wp-content/uploads/2019/03/java-script-800x600.jpg" />
        <CardBody>
          <CardTitle tag="h5">JavaScript</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Lenguaje Interpretado
          </CardSubtitle>
          <CardText>
            <p>JavaScript es un lenguaje de programación interpretado, de alto nivel y dinámico. Es el lenguaje de programación de facto para el desarrollo web, utilizado principalmente para crear interactividad en sitios web. Se ejecuta en el navegador del cliente y es fundamental para las tecnologías web como HTML, CSS y AJAX. Con el tiempo, JavaScript se ha expandido más allá del navegador gracias a entornos como Node.js, permitiendo el desarrollo de aplicaciones del lado del servidor.</p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default CustomCard;
