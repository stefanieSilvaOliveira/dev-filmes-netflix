import styled from 'styled-components';

export const Container = styled.div`
         width: 520px;
         padding: 50px 60px 20px;
         display: flex;
         flex-direction: column;   

         @media(max-width:560px) {
           width: 100%;
           padding: 20px;
           align-items: center;
           text-align: center;
     }
     

       button{
       display: inline-flex;
       align-items: center;
       justify-content: center;
       cursor: pointer;
       width: 120px;
       height: 38px;
       border: 2px solid #fff;
       border-radius: 20px;
       background-color: transparent;
       font-weight: 500;
       font-size: 12px;
       color: #FFF;
       transition: 0.3s;

       @media(max-width:560px) {
           margin-top: 15px;
           width: 100px;
           height: 30px;
           
     }
     

       &:hover{
              opacity: 0.7;
       }

       &:active{
              opacity: 0.5;
              background: #dbdbdb;
       }

       }
`
export const Title = styled.h1`
     color: #FFF;
     text-align: center;
     font-size: 60px;
     font-weight: 200;
     
      @media(max-width:560px) {
          display: block;
          margin-top: 150px;
          width: 50px;
          height: 50px;
          margin-left: -380px;
     }   
`;

export const Description = styled.p`
        font-size: 13px;
        font-weight: 300;
        text-align: center;
        color: #fff;
        opacity: 0.7;
        margin-top: 30px;
        cursor: pointer;

        @media(max-width:560px) {
           margin-top: 150px;
           font-size: 10px;
          
     }
     
`

export const Button = styled.button`
       
       display: inline-flex;
       align-items: center;
       justify-content: center;
       cursor: pointer;
       gap: 10px;
       width: 150px;
       height: 38px;
       border: none;
       border-radius: 20px;
       @media(max-width:560px) {
           right: 30px;
          margin-left: -50px;
     }
     
    
`
