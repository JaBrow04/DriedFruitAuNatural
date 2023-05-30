import styled from "styled-components";
import img from '../Fruit.jpg';
export const MainLandingContainer = styled.div`
  height: calc(100vh - 60px);

`;
export const PictureLandingContainer = styled.div`
    background-image: url(${img});
    height: calc(100vh - 60px);
    width: 100%;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    font-size: 0.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  h1{
    font-family: 'Brightwall', cursive;
    color: #FFF;
    font-size: xx-large;
    font-weight: bolder;
    margin: 1px;
    letter-spacing: 0.3rem;
  }
  h3 {
    font-size: 1rem;
    letter-spacing: 0.3rem;
    opacity: 0.6;
    color: #FFF;
  }
`;
export const ColoredBoxLandingContainer = styled.div`
  margin: 10vh 10vw;
  padding: 10vh 10vw;
  background-color:rgb(189, 189, 189, .75);
  h1{
    font-family: 'Brightwall', cursive;
    color: #FFF;
    font-size: xx-large;
    font-weight: bolder;
    margin: 1px;
    letter-spacing: 0.3rem;
    opacity: 1;
    z-index: 2;

  }
  h3 {
    font-size: 1rem;
    letter-spacing: 0.3rem;
    opacity: 0.9;
    color: #FFF;
  }
`;
