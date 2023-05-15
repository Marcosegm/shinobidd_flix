import "./FormularioCategoria.css"
import  Container  from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import { Campo } from "../Campo";
import { Btn } from "../Btn";
import { useEffect, useState } from "react";
import { TablasCategorias } from "../TablasCategorias";
import { v4 as uuid } from "uuid"
import { Link } from "react-router-dom";
import { obtenerRegistroOpciones, actualizarCategoria } from "../../API/api";



const FormularioCategoria = (props) => {

    const {nombreCategoria, eliminarCategoria, crearCategoria, editarCategoria} = props
    
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [codigo, setCodigo] = useState("");
    const [color, setColor] = useState("");

    const [datos, setDatos] = useState({});

    const [obtenerId, setObtenerId] = useState("")

    useEffect(() => {
        obtenerRegistroOpciones(obtenerId, setDatos);
    },[obtenerId])

    useEffect(() => {
        // Actualizar los valores de los campos utilizando los valores de datos
        setTitulo(datos.titulo || "");
        setDescripcion(datos.descripcion || "");
        setCodigo(datos.codigo || "");
        setColor(datos.color || "");
    }, [datos]);
    
    const click = () => {
        const datosInput = {
            titulo,
            descripcion,
            codigo,
            color,
            id: obtenerId
          };
        actualizarCategoria(obtenerId, datosInput)
    }

    const manejarEnvio = (e) => {
        // e.preventDefault()
        let datosInput = {
            titulo,
            descripcion,
            codigo,
            color,
            id: uuid()
        }
        crearCategoria(datosInput)
        console.log(datosInput)
    }
    const manejarColor = (e) => {
        setColor(e.target.value)
    }

    const manejarLimpiar = () => {
        setTitulo("");
        setDescripcion("");
        setCodigo("");
    }

    return (
        <Container component={"section"} maxWidth="md" className="contenedor">
            <form onSubmit={manejarEnvio} className="formularioCategoria">
                <h2 className="titulo">Nueva Categoría</h2>
                
                <Campo
                    id="nombre"
                    label="Nombre"
                    multiline={false}  
                    value={titulo}
                    actualizarValue={setTitulo}
                />
                <Campo
                    id="descripcion"
                    label="Descripción de la categoría"
                    multiline={true}
                    value={descripcion}
                    actualizarValue={setDescripcion}
                />
                <Campo
                    id="codigo"
                    label="Código de seguridad"
                    multiline={false}
                    value={codigo}
                    actualizarValue={setCodigo}
                />
                <div className="ContenedorColor">
                    
                    <input
                        placeholder=""
                        value={color}
                        onChange={manejarColor}
                        type="color"
                        required
                    />
                </div>
                <div className="btnContainer">
                    <Stack spacing={3} direction="row" >
                        <Btn color="primary" texto="Guardar" type="submit"/>
                        <Btn color="secondary" texto="limpiar" onClick={manejarLimpiar} />
                    </Stack>
                    <Stack >
                        <Link to="/categoria-guardada"><Btn color="primary" texto="Actualizar" onClick={click} /></Link>
                    </Stack>
                </div>
            </form>
            <TablasCategorias 
                nombreCategoria={nombreCategoria} 
                eliminarCategoria={eliminarCategoria} 
                editarCategoria={editarCategoria}
                obtenerId={setObtenerId}/>
        </Container>
    )
}

export { FormularioCategoria}
