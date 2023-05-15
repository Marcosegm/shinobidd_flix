import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { FormularioVideo } from './Components/FormularioVideo';
import { FormularioCategoria } from './Components/FormularioCategoria';
import { Page404 } from './Pages/Page404/Page404'
import { Footer } from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { buscar, crear, eliminar} from './API/api';
import { CategoriaGuardada } from './Pages/CategoriaGuardada';

function App() {

  // const opcionesBorrador = [
  //   {
  //     titulo: "Naruto",
  //     color: "#FF8A29",
  //     descripcion:"",
  //     codigo:"123",
  //     id:uuid(),
  //   },
  //   {
  //     titulo: "Dragon Ball Z",
  //     color: "#E06b69",
  //     descripcion:"",
  //     codigo:"123",
  //     id:uuid(),
  //   },
  //   {
  //     titulo: "Demon Slayer",
  //     color: "#DB6EBF",
  //     descripcion:"",
  //     codigo:"123",
  //     id:uuid(),
  //   },
  //   {
  //     titulo: "Attack on Titan",
  //     color: "#A6D157",
  //     descripcion:"",
  //     codigo:"123",
  //     id:uuid(),
  //   },
  //   {
  //     titulo: "Boku no Hero",
  //     color: "#82CFFA",
  //     descripcion:"",
  //     id:uuid(),
  //     codigo:"123",
  //   },
  //   {
  //     titulo: "Fullmetal Alchemist",
  //     color: "#57C278",
  //     descripcion:"",
  //     codigo:"123",
  //     id:uuid(),
  //   },
  // ]

  // const videosBorrador = [
  //   {
  //     titulo:"Naruto",
  //     linkVideo:"https://www.youtube.com/watch?v=gM0XmG1pjBI",
  //     linkImagen:"https://naruto-official.com/common/ogp/NTOS_OG-main.png",
  //     opciones:"Naruto",
  //     descripcion:"naruto shipuden",
  //     codigo:"124",
  //     id:uuid()
  //   },
  //   {
  //     titulo:"Dragon Ball Z",
  //     linkVideo:"https://www.youtube.com/watch?v=xhk7WxyU_Sw",
  //     linkImagen:"https://generacionxbox.com/wp-content/uploads/2021/03/Dragon-Ball-Z-Kakarot-ID.jpg",
  //     opciones:"Dragon Ball Z",
  //     descripcion:"naruto shipuden",
  //     codigo:"124",
  //     id:uuid()
  //   }
  // ]
    
  const url1 = "/videoNuevo"
  const [videoNuevo, setVideoNuevo] = useState([])
  useEffect(()=> {
    buscar(url1, setVideoNuevo)
  }, [url1])

  const url2= "/opciones"
  const [opciones, setOpciones] =useState([])
  useEffect(()=> {
    buscar(url2, setOpciones)
  }, [url2])
  
  const location = window.location.pathname
  const banner = () => {
    if (location === "/") {
      return <img className="banner" src="/img/banner.jpg" alt="banner"/>
    } else {
      return <></>
    }
  }

  const registrarVideo = (video) => {
    // setVideoNuevo([...videoNuevo, video])
    // console.log(video)
    console.log(video)
    crear(url1, video)
    .then(response => {
      console.log("Registro creado:", response)
    })
    .catch(error => {
      console.error("Error al crear registro:", error)
    })
  }

  const crearCategoria = (nuevaCategoria) => {
    // setOpciones([...opciones, nuevaCategoria])
    // console.log(setOpciones)
    console.log(nuevaCategoria)
    crear(url2, nuevaCategoria)
    .then(response => {
      console.log("Registro creado:", response)
    })
    .catch(error => {
      console.error("Error al crear registro:", error)
    })
  }

  const eliminarCategoria = (id) => {
    console.log("eliminar categoria", id)
    eliminar(`/opciones/${id}`)
    .then(response => {
      console.log("Registro eliminado", response)
    })
    .catch(error => {
      console.log("Error al eliminar registro:", error)
    })
    const newCategorias = opciones.filter((opcion) => opcion.id !== id)
    setOpciones(newCategorias)
  }

  const editarCategoria = (id) => {
    console.log(id)
  }

  
  return (
    <div className="App">
      <Header btnTexto="Nuevo video" />
      { banner() }
      <Router>
        <Routes>
          <Route path='/' element={
            opciones.map((opcion) => {
              return <Home 
                datos={opcion} 
                key={opcion.titulo}
                videoNuevo={videoNuevo.filter(video => video.opciones === opcion.titulo)}
                url={"/videoNuevo"}
                />
            })
          }/>
          <Route path='/nuevo-video' element= {
            <FormularioVideo 
              nombreCategoria={opciones.map((opcion)=> opcion.titulo)}
              registrarVideo={registrarVideo}
              />}/>
          <Route path='/nueva-categoria' element={
            <FormularioCategoria
              nombreCategoria={opciones}
              eliminarCategoria={eliminarCategoria}
              crearCategoria={crearCategoria}
              editarCategoria={editarCategoria}
              
            />}/>
          <Route path='*' element={<Page404/>}/>
          <Route path='/categoria-guardada' element={<CategoriaGuardada/>}/>
          {/* <Route path='/cateegoria-actualizada' element={}/> */}
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
