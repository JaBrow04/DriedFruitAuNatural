import styled from "styled-components";
export const HomeTeasersContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  gap:  20px;
  border-radius: 12px;
  padding: 100px;
  max-height: 60vh;
  contain: paint;
  @media (max-width: 1000px) {
    flex-flow: column ;
    flex:1;
    width : 90vw;
    height: auto;
    padding: 2vh 0 10vh 0;
    margin:2vh ;
    align-items: center;
    align-content: center;
    position:relative;
  }
  
`;
export const TeasersTextContainer = styled.div`
	display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    position: relative;
    flex:60%;
    border: solid thick #E7DECD;
    background: repeating-linear-gradient(
          -45deg,
          #E7DECD,
          #E7DECD 5px,
          #FBFAF8 5px,
          #FBFAF8 60px
  );
  @media (max-width: 1000px) {
    height :40vh;
    width: 60vw;
    padding: 5vw;
    top:5vh
    
  }
`;
export const TextBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 15px;
  height: 40vh;
  width: 40vw;
background: white;
  border: solid 5px #E7DECD;
  text-align: center;
  font-weight: 100;
  letter-spacing: 0.23px;
  font-size: larger;
  white-space: pre-line;
margin:15px;
  h1{
    font-family: 'Brightwall', cursive;
    color: #0A122A;
    font-size: xxx-large;
    font-weight: normal;
    margin-bottom: 1px;
  }
  p{margin: 1px;}
  @media (max-width: 450px) {
    h1{
      font-size: x-large;
    };
    p{
      font-size: small;
    }

  ;
`
export const Button = styled.button`
  background-color: #0A122A;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0;
  cursor: pointer;
  box-shadow: 0 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #0A122A;
    opacity: 0.7;

  }
`;
export const EmptyTopBoxes = styled.div`
  position: absolute;
  height: 40vh;
  width: 40vw;
  padding: 18px;
  border: thick solid #4f5c83;
  top: -5vh;
  right:-5vw;

`
export const EmptyBottomBoxes = styled.div`
  position: absolute;
  height: 40vh;
  width: 40vw;
  padding: 18px;
  border: thick solid #4f5c83;
  bottom: -5vh;
  left: -5vw;`
export const ProductImage = styled.img`
  object-fit: cover;
  align-content: center;
  z-index: 2;
  flex-shrink: 2;
  flex: 40%;
  max-width: 30vw;
  @media (max-width: 1000px) {
   visibility: collapse;
    display: none;
    height: 0;
    flex : 0

  }
`




