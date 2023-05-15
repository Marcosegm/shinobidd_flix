import "./DatoTabla.css"
import  {IoCloseCircleOutline,IoCreate}  from "react-icons/io5"


const DatoTabla = (props) => {

    const {titulo, descripcion, id, eliminarCategoria, editarCategoria, obtenerId} = props

    const manejarCambio = () => {
        editarCategoria(id)
        obtenerId(id)
       }
    
    return (
        <tr>
            <td>{titulo}</td>
            <td>{descripcion}</td>
            {/* <td className="cursor" onClick={()=> editarCategoria(id) }> <IoCreate/>  </td> */}
            <td className="cursor" onClick={ manejarCambio}> <IoCreate/>  </td>
            <td className="cursor" onClick={() => eliminarCategoria(id)}><IoCloseCircleOutline/></td>
            
        </tr>
    )
}

export {DatoTabla}