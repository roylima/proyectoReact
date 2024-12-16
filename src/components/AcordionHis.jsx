import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function AcordionHis(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Código Máquina</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>Primera etapa:</strong> Los primeros lenguajes de programación eran binarios (ceros y unos),
            llamados código máquina. Eran específicos para cada computadora y difíciles de entender.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Lenguaje Ensamblador</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>Simplificación inicial:</strong> Surgieron en los años 1940 y usaban abreviaciones
            simbólicas en lugar de código binario, haciendo la programación más accesible.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Lenguajes de Alto Nivel</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>FORTRAN y COBOL:</strong> En los años 1950, estos lenguajes permitieron a los
            programadores usar sintaxis más parecida al lenguaje humano para resolver problemas complejos.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Lenguajes Orientados a Objetos</AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>Avance en los años 1980:</strong> Lenguajes como C++ y Java introdujeron el concepto
            de objetos, permitiendo organizar el código en estructuras reutilizables y más manejables.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Lenguajes Modernos</AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>Adaptación y flexibilidad:</strong> Lenguajes como Python, JavaScript y Go son populares
            hoy en día gracias a su simplicidad, versatilidad y gran comunidad de desarrolladores.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AcordionHis;
