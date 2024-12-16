import React from "react";
import "./Footer.css"; 

function Foot() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 ROY ALEJANDRO LIMA SEMPERTEGUI. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <a href="/contacto">Contacto</a>
          <a href="/politica-de-privacidad">Política de Privacidad</a>
          <a href="/terminos-y-condiciones">Términos y Condiciones</a>
        </nav>
      </div>
    </footer>
  );
}

export default Foot;
