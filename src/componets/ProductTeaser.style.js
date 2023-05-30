import styled from "styled-components";
export const TeasersTextContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  position: relative;
  flex:60%;
  border: solid thick #4f5c83;
  background: repeating-linear-gradient(
          -45deg,
          #4f5c83,
          #4f5c83 5px,
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
export const EmptyTopBoxes = styled.div`
  position: absolute;
  height: 40vh;
  width: 40vw;
  padding: 18px;
  border: thick solid #E7DECD;
  top: -5vh;
  right:-5vw;

`
export const EmptyBottomBoxes = styled.div`
  position: absolute;
  height: 40vh;
  width: 40vw;
  padding: 18px;
  border: thick solid #E7DECD;
  bottom: -5vh;
  left: -5vw;`

