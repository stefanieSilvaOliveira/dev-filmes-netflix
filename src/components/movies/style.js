import styled from 'styled-components'

export const Container = styled.div`
         padding: 20px 20px;
         width: 100%;

         @media(max-width:560px) {
             padding: 20px;
        }   

         .react-multi-carousel-list{
             
            display: flex;
            align-items: center;
            background-color: #000;

            }

            @media(max-width:560px) {
             
       }   
            
            & li{
                display: flex;
                padding: 8px;
                align-items: center;
            }     
`;
         
export const Text = styled.p`
       color: #fff;
       font-size: 16px;
       font-weight: 600;
       margin-bottom: 15px;
       cursor: pointer;
       margin-left: 20px;
`
export const Movie = styled.img`
       border-radius: 10px;
       width: 220px;
       height: 170px;
       cursor: pointer;

       transform: scale(0.9);
       transition: 0.3s;

       &:hover{
        transform: scale(1)
       }
`