import styled from 'styled-components';

export const BackgroundImage = styled.div`

        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: url(${(props) => props?.bgImage});

        @media(max-width:560px) {
           height: 100%;
           width: 100%;
     }
     
    `;

export const BackgroundGradient = styled.div`
        background: linear-gradient(to top,#000 10%, transparent 100%);

`;  