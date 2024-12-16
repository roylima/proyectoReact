import "../components/Carrusel";
import "./Inicio.css"
import Carrusel from "../components/Carrusel";
import Informacion from "../components/Informacion";


export default function Inicio(){
    return(
        <div>
            <div className="contenedor">
                    <div><Carrusel></Carrusel></div>
                    <h1>Lenguajes Famosos de Programación</h1>                      
                    <div><Informacion></Informacion></div>     
            </div>
        </div>
    )
}