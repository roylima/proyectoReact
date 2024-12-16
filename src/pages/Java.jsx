import InformacionJava from "../components/InformacionJava";
import MiTabla from "../components/MiTabla";
import MiTabla2 from "../components/MiTabla2";
import "./Java.css"
export default function Java(){
    return(
        <div className="containerJava">
            <div className="informacionJava"><InformacionJava></InformacionJava></div>
            <div className="titulo1"><h3>TIPOS DE DATOS EN JAVA </h3></div>
            <div className="titulo2"><h3>OPERADORES JAVA</h3></div>
            <div className="tabla1"><MiTabla></MiTabla></div>
            <div className="table2"><MiTabla2></MiTabla2></div>
        </div>
    )
}