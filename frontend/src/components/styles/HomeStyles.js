
import styled from 'styled-components';
import BackgroundImage from '../../assets/homepage-bg.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImage});
  ${'' /* opacity: 0.7; */}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: scroll;
`;

export const TextWrapper = styled.div`
   max-width: 650px;
   color: black;
   background-color: #cc5f03;
   display: grid;
   margin: 0 auto;
   text-align: center;
   ${'' /* padding: 60px; */}
   border-radius: 5px;
   opacity: 0.6;
`;
