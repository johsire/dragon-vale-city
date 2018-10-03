
import styled from 'styled-components';
import BackgroundImage from '../../assets/homepage-bg.jpg'

export const Container = styled.div`
  width: 100%;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  ${'' /* opacity: 0.7; */}
`;

export const TextWrapper = styled.div`
   max-width: 740px;
   color: white;
   background-color: #cc5f03;
   display: grid;
   margin: 0 auto;
   text-align: center;
   padding: 60px;
   border-radius: 5px;
   opacity: 0.6;
`;
