import "./Btn.css"
import  Button  from "@mui/material/Button"
import { createTheme, ThemeProvider } from '@mui/material/styles';



const Btn = (props) => {

    const {color, texto, type, onClick, disabled} = props 

    const theme = createTheme({
        palette: {
            primary: {
                main: '#990000 ',
                contrastText:'#fff',
            },
            secondary: {
                main: '#FF5500',
                contrastText:'#fff',
            },
            neutral: {
                main: 'rgb(251 98 28)',
                contrastText: '#fff',
            },
        },
      });

    return (
        <ThemeProvider theme={theme}>
            <Button color={color} variant="contained" type={type}  onClick={onClick} disabled={disabled}> {texto} </Button>
        </ThemeProvider>
        
    )
}

export { Btn }