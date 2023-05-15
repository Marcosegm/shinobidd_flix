import axios from "axios" 

const api = axios.create({
    // baseURL: "http://localhost:3000"
    baseURL: "https://6420f3ee82bea25f6d097324.mockapi.io/api"
})

const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}

const crear = async (url, newData) => {
    const respuesta = await api.post(url, newData)
    return respuesta.data
}

const eliminar = async (url) => {
    const respuesta = await api.delete(url)
    return respuesta.data
}

const obtenerRegistroOpciones = async (id, setData) => {
    await buscar(`/opciones/${id}`, setData);
}
  
const actualizarCategoria = async (id, datos) => {
    try {
      const respuesta = await api.put(`/opciones/${id}`, datos);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };
  


export { buscar, crear, eliminar, obtenerRegistroOpciones, actualizarCategoria}