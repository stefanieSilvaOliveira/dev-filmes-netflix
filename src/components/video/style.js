import styled from "styled-components";

export const Container = styled.div`

       position: fixed;
       top: 0;
       display: flex;
       align-items: center;
       justify-content: center;
       width: 100%;
       height: 100vh;
       background-color: #000;

       vm-player{
        width: 80%;
       }
`;

export const Button = styled.button`
       position: absolute;
       right: 10px;
       top: 10px;
       width: 120px;
       height: 40px;
       border-radius: 20px;
       font-size: 15px;
       font-weight: 500;
       color: #fff;
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 12px;

     background: transparent;
     border: 2px solid #FFF;
     color: #fff;
     opacity: 0.7;
     cursor: pointer;
     transition: 0.3s;

     &:hover{
       opacity: 1;
     }
`;