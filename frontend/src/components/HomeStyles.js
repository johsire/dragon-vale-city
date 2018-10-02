
import styled from 'styled-components';
import BackgroundImage from '../assets/homepage-bg.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 280px;
  ${'' /* opacity: 0.7; */}
`;

export const FormWrapper = styled.div`
   max-width: 600px;
//    background-color: #cc5f03;
   display: grid;
   margin: 0 auto;
   text-align: center;
   padding: 30px;
   border-radius: 10px;
   color: black;
`;


export const Nav = styled.div `
  color: black;
  text-decoration: none;
  text-align: left;
`;
