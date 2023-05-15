import "./Home.css"
import { Videos } from "../Videos"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = (props) => {
    const {datos, videoNuevo} = props

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
              initialSlide: 2
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
            <div className="carousel">
                <Slider {...settings}>
                    {
                        videoNuevo.map( (video, index) => <Videos
                            datos={datos}
                            info={video}
                            key={index}/>)
                    }
                </Slider>
            </div>
        </section>
    }
    </div>
}

export { Home }