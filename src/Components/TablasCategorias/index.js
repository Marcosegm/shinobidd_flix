import "./TablasCategorias.css"
import { DatoTabla } from "../DatoTabla"

const TablasCategorias = (props) => {

    const {nombreCategoria, eliminarCategoria, editarCategoria, obtenerId} = props

    return (
        <div>
            <table >
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Editar</th>
                        <th>Remover</th>
                    </tr>
                    {nombreCategoria.map((dato, index)=> <DatoTabla
                        titulo={dato.titulo} 
                        descripcion={dato.descripcion} 
                        id={dato.id}
                        eliminarCategoria={eliminarCategoria} 
                        editarCategoria={editarCategoria}
                        obtenerId= {obtenerId}
                        key={index}/>)}
                </tbody>
            </table>
        </div>
    )
}

export {TablasCategorias}