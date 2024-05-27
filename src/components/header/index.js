import { Container } from "./style";
import logoImage from "../../assets/logo-dev.png";

export const Header = () =>{
    return(
        <Container>
            <img src={logoImage} alt="logo">
            </img>

            <nav>
            <a href="#">Filmes</a>
            
            <a href="#">Contato</a>  
            <a href="#">Perfil</a>  
            </nav>     
           
        </Container>
    )
};