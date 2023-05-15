import "./Campo.css"
import  TextField  from '@mui/material/TextField';

const Campo = (props) => {

    const {id, label, multiline, value, actualizarValue} = props

   const manejarCambio = (e) => {
    actualizarValue(e.target.value)
    
   }

    return (
        <div>
            <TextField
                id={id}
                label={label}
                variant="filled"
                fullWidth={true}
                margin="normal"
                required
                multiline={multiline}
                rows={4}
                value={value}
                onChange={manejarCambio}
            />         
            
        </div>
    )
}

export { Campo }