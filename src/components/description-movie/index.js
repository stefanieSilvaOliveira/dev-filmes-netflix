import * as C from './style';
import { FaPlayCircle } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";

export const DescriptionMovie = ({title,description,handleOpenPlayVideo}) =>{
    return(
        <C.Container>
        <C.Title>
        {title}
        </C.Title>   
        
       <C.Description> 
       {description}
        </C.Description>
        
 <div style={{ display: 'flex', gap: '10px', marginTop: '30px', marginLeft: '70px'}}>
  <C.Button onClick={handleOpenPlayVideo}>
    <FaPlayCircle size={18} style={{ color: '#FF0000' }}/> Assistir
  </C.Button>
  <div className='button-infor'> 
    <button> 
      <BiPlus size={18} style={{ color: '#FFF', marginRight: '10px' }}/>Mais
    </button>
    </div>
    </div>    
   </C.Container>
    )
};