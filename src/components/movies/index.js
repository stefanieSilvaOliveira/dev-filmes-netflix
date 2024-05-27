import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import animaçõesDisney from '../../assets/princesa-rapuzel.png';
import cinderellaTres from '../../assets/cinderella-tres.png';
import monstrosCity from '../../assets/mostros-city.png';
import osIncriveis from '../../assets/os-incriveis.png';
import princesaRapuzel from '../../assets/princesa-rapuzel.png';
import procurandoDory from '../../assets/procurando-dory.png';

import * as C from './style'



export const Movies = () =>{
    
    const responsive = {
        
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        },
      };
    
    return(
       <C.Container>
        <C.Text>Minha Lista</C.Text>

        <Carousel responsive={responsive}>
       
       <C.Movie src={animaçõesDisney} alt="image-1"></C.Movie>
       <C.Movie src={cinderellaTres} alt="image-2"></C.Movie>
       <C.Movie src={monstrosCity} alt="image-3"></C.Movie>
       <C.Movie src={osIncriveis} alt="image-4"></C.Movie>
       <C.Movie src={princesaRapuzel} alt="image-5"></C.Movie>
       <C.Movie src={procurandoDory} alt="image-6"></C.Movie>
       <C.Movie src={animaçõesDisney} alt="image-1"></C.Movie>
       <C.Movie src={cinderellaTres} alt="image-2"></C.Movie>
       <C.Movie src={monstrosCity} alt="image-3"></C.Movie> 
        </Carousel>

       </C.Container>
    )
}