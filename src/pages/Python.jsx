import InformacionPython from "../components/InformacionPython";
import MiTabla1Python from "../components/MiTabla1Python";
import MiTabla2 from "../components/MiTabla2";

import "./Python.css"
export default function Python(){
    return(
            <div className="containerPython">
                <div className="informacionPython"><InformacionPython></InformacionPython></div>
                <div className="titulo1P"><h3>TIPOS DE DATOS EN PYTHON </h3></div>
                <div className="titulo2P"><h3>OPERADORES PYTHON</h3></div>
                <div className="tabla1P"><MiTabla1Python></MiTabla1Python></div>
                <div className="table2P"><MiTabla2></MiTabla2></div>
             </div>
    )
}