import CardPro from "../components/CardPro";
import "./Clasificacion.css"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

export default function Clasificacion(){
    return(
        <div className="tituloClas">
            <h1>CLASIFICACION DE LOS LENGUAJES DE PROGRAMACION</h1>
        <div className="clasificacionCont"> 
            <div className="caja1"><CardPro titulo="Lenguajes de Scripts" color="blue" imagen={img1} contenido="Son lenguajes diseñados principalmente para automatizar tareas y realizar operaciones específicas dentro de un entorno determinado.Ejemplos: JavaScript, Python, PHP, Ruby.Aplicaciones: Desarrollo web, automatización de procesos, creación de scripts para servidores y manejo de datos." ></CardPro></div>

            <div className="caja2"><CardPro titulo="Lenguajes de Compilado" color="purple" imagen={img2} contenido="Estos lenguajes se convierten en código máquina antes de ejecutarse, lo que los hace más rápidos y eficientes en comparación con los lenguajes interpretados. Ejemplos: C, C++, Rust, Go.Aplicaciones: Desarrollo de sistemas operativos, software de alto rendimiento, videojuegos, aplicaciones críticas. "></CardPro></div>

            <div className="caja3"><CardPro titulo="Lenguajes Funcionales" color="rose" imagen={img3} contenido="Se centran en la programación basada en funciones matemáticas, evitando estados mutables y efectos secundarios. Ejemplos: Haskell, Lisp, Scala, F#. Aplicaciones: Análisis de datos, inteligencia artificial, programación concurrente."></CardPro></div>

            <div className="caja4"><CardPro titulo="Lenguajes de Marca" color="green" imagen={img4} contenido="Estos lenguajes se utilizan principalmente para estructurar, describir y procesar datos o documentos. Ejemplos: HTML, XML, Markdown, JSON. Aplicaciones: Desarrollo web, almacenamiento de datos, diseño de documentos."></CardPro></div>
        </div>
        </div>
    )
}