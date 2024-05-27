import { Player, Youtube } from "@vime/react";
import * as C from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";


export const Video = ({linkVideo,playVideo, handleClosePlayVideo}) => {
    return  playVideo? (
       <C.Container>
        <C.Button onClick={handleClosePlayVideo}> 
        <AiOutlineArrowLeft></AiOutlineArrowLeft>
         Voltar
         </C.Button> 
        
        <Player controls>
        <Youtube videoId="S34ZMLflt78"/>   
        </Player>
        </C.Container>
    ) :null ;
};