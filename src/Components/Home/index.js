import "./Home.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = (props) => {

    const {datos, videoNuevo} = props

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
    
    return <div>
    { videoNuevo.length > 0 &&
        <section className="categorias">
            <h2 className="tituloCategoria" style={{backgroundColor : datos.color}}> {datos.titulo} </h2>
            <div className="contenedorVideos">
                <Slider {...settings}>
                    {videoNuevo.map( (video) =>
                        <div className="card" >
                            <a className="subcard" href={video.linkVideo}  target="_blank" rel="noopener noreferrer"><img className="imagen" src={video.linkImagen} alt="imagen" style={{borderColor: datos.color}}/></a>
                        </div>
                    )}
                </Slider>
            </div>
        </section>
    }
    </div>
}

export { Home }