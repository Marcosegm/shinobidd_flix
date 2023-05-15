import "./Videos.css"

const Videos = (props) => {

    

    const {color} = props.datos
    const {linkImagen, linkVideo} = props.info

    return(  
        
            <a className="contenedorVideo" href={linkVideo} style={{borderColor: color}}  target="_blank" rel="noopener noreferrer"><img className="imagen" src={linkImagen} alt="imagen"/></a>
        
    )
}

export { Videos }