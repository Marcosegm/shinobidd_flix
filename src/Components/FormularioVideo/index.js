import "./FormularioVideo.css"
import { Campo } from "../Campo";
import { ListaOpciones } from "../ListaOpciones";
import { Btn } from "../Btn";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import {  useState } from "react";
import  Container  from "@mui/material/Container";
import { v4 as uuid } from "uuid"

const FormularioVideo = (props) => {

    const {nombreCategoria, registrarVideo,} = props 

    const [titulo, setTitulo] = useState("")
    const [linkVideo, setLinkVideo] = useState("")
    const [linkImagen, setLinkImagen] = useState("")
    const [opciones, setOpciones] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [codigo, setCodigo] = useState("")
    const [isActive, setIsActive] = useState(true)
    
    const manejarEnvio = (e) => {
        // e.preventDefault()
        let datosInput = {
            titulo,
            linkVideo,
            linkImagen,
            opciones,
            descripcion,
            codigo,
            id: uuid()
        }
        registrarVideo(datosInput)
    }

    const manejarLimpiar = () => {
        setTitulo("");
        setLinkVideo("");
        setLinkImagen("");
        setDescripcion("");
        setCodigo("");
    }

    const handleClick = () => {
        setIsActive(false);
    }

    return (
        <Container component={"section"} maxWidth="md">
            <form onSubmit={manejarEnvio} className="formulario">
                <h2 className="titulo">Nuevo Video</h2>
                
                <Campo
                    id="titulo"
                    label="Titulo"
                    multiline={false}
                    value={titulo}
                    actualizarValue={setTitulo}
                />
                <Campo
                    id="linkVideo"
                    label="Link del video"
                    multiline={false}
                    value={linkVideo}
                    actualizarValue={setLinkVideo}
                />
                <Campo
                    id="linkImagen"
                    label="Link imagen del video"
                    multiline={false}
                    value={linkImagen}
                    actualizarValue={setLinkImagen}
                />
                <ListaOpciones
                    value={opciones}
                    actualizarValue={setOpciones}
                    nombreCategoria={nombreCategoria}
                
                />
                <Campo
                    id="descripcion"
                    label="Descripción"
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
                <div className="btnContainer">
                    <Stack spacing={3} direction="row" >
                        <Btn color="primary" texto="Guardar" type="submit" /> 
                        {/* onClick={handleClick} disabled={!isActive} */}
                        <Btn color="secondary" texto="limpiar" onClick={manejarLimpiar}/>
                    </Stack>
                    <Stack>
                        <Link to='/nueva-categoria'><Btn color="primary" texto="Nueva Categoría"/></Link>
                    </Stack>

                </div>
            </form>
            {!isActive && <div className="textoConfirmacion">Video subido con éxito!!</div>}
        </Container>
    )
}

export { FormularioVideo }