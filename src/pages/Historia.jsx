import "./Historia.css"
import Carrusel2 from "../components/CarruselHis";
import AcordionHis from "../components/AcordionHis";
export default function Historia(){
    return(
        <div>
            <div className="containerHis">
                <div className="tituloHis"><h2>¿Como se Origino?</h2></div>
                <div className="parrafoHis"><p>Los lenguajes de programación surgieron como una necesidad para comunicar instrucciones a las computadoras de manera eficiente y comprensible. En sus inicios, las computadoras se programaban mediante código máquina, un sistema de instrucciones en lenguaje binario (ceros y unos) que era complejo y propenso a errores. Durante la década de 1940, con el desarrollo de las primeras computadoras digitales, surgieron los lenguajes ensambladores, que permitían a los programadores usar abreviaturas y códigos simbólicos en lugar de largos patrones de números binarios. Estos lenguajes aún estaban estrechamente vinculados al hardware de las máquinas, pero facilitaron enormemente el trabajo de los programadores. </p></div>
                <div className="carruselHis"><Carrusel2></Carrusel2></div>
                <div className="parrafo2His"><p>En las décadas posteriores, especialmente durante los años 1950 y 1960, emergieron los lenguajes de alto nivel como FORTRAN y COBOL. Estos lenguajes fueron diseñados para ser más abstractos y cercanos al lenguaje humano, lo que permitió a los desarrolladores enfocarse en resolver problemas lógicos y matemáticos sin preocuparse por los detalles específicos del hardware. La introducción de compiladores, programas que traducen el código de alto nivel al lenguaje de máquina, fue un avance crucial. Desde entonces, los lenguajes de programación han evolucionado continuamente, adoptando paradigmas como la programación orientada a objetos, funcional y declarativa, para adaptarse a las necesidades cambiantes de la tecnología y la sociedad.</p></div>
                <div className="acordionHis"><AcordionHis></AcordionHis></div>
            </div>
        </div>
    )
}