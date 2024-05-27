import styled from "styled-components"

export const Container = styled.header`
       width: 100%;
       height: 60px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 10px 80px;

       @media(max-width:560px) {
           padding: 10px;

                    
     }
       img{
        width: 100px;
        height: 100px;
        cursor: pointer;
       }

       nav{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 80px;
        cursor: pointer;
        position: relative;
      }

      @media(max-width:560px) {
           
           position: absolute;
     }

       a{
        font-weight: 500;
        font-size:   16px;
        line-height: 25px;
        letter-spacing: 0.03em;
        text-decoration: none;
        color: #FFF;
        position: relative;
        transition: 0.3s;
       }
           @media(max-width:560px) {
            
            position: absolute;
            flex-direction: column;
     }

       a:hover {
       color:  #CED4D4
       }

       a::after{
        content: "";
        width: 0;
        height: 2px;
        background-color: #FFF;
        position: absolute;
        bottom: 2px;
        left: 0;
        transition: 0.3s;
       }

       a:hover::after {
        width: 100%;
       }    
`;