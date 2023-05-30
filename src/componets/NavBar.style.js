import styled from "styled-components";
export const NavBarStyle = styled.div`
    width: 100%;
    max-width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #5b7e63;
    transition: all .2s ease;
    position: sticky;
    top: 0px;
  z-index: 3;
  body {
    font-family: "Century Gothic", 'Lato', sans-serif;
    color: white;
  }
`
export const HomeIconImg = styled.img`
  overflow: hidden;
  text-align:center;
  margin:auto;
  align-content: center;
  flex-basis: 100%;
  max-width: 50px;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);


`