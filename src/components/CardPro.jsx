import "./CardPro.css"
export default function CarPro(props){
    return(
        <div class="cardPro">
            <div className="tituloCard">
                <h3 style={{color:props.color}}>{props.titulo}</h3>
                </div>
            <div className="imagenCard">
                <img src={props.imagen} alt="" />
                </div>
            <div className="card-info">
             <p className="contenidoCard">
                {props.contenido}</p>
            </div>
        </div>
    )
}