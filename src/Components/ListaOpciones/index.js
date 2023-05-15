import "./ListaOpciones.css"
import  TextField  from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const ListaOpciones = (props) => {

    const {value, actualizarValue, nombreCategoria} = props
    
    return (
        <Autocomplete
            id="categoria"
            options={nombreCategoria}
            onChange={(e, value) =>
                actualizarValue(value)}
            renderInput={(params) => 
            <TextField {...params} 
                label="Escoja una categoría" 
                variant="filled"
                margin="normal" 
                value={value}
                />}
        />
    )
}

export { ListaOpciones }