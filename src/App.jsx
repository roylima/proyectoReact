import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Clasificacion from "./pages/Clasificacion";
import Historia from "./pages/Historia";
import Lenguajes from "./pages/Lenguajes";
import Java from "./pages/Java";
import Python from "./pages/Python";

import Menu from "./layouts/Menu";
import Foot from "./layouts/Foot"   ;

function App() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Clasificacion" element={<Clasificacion />} />
        <Route path="/Historia" element={<Historia />} />
        <Route path="/Lenguajes" element={<Lenguajes />} />
        <Route path="/Java" element={<Java />} />
        <Route path="/Python" element={<Python />} />
      </Routes>
      <Foot></Foot>
    </>
  );
}

export default App;
