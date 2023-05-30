import styled from "styled-components";

/**
 * @default Props: flexDirection = 'column', flexGrow = 0;
 */
export const AboutContainer = styled.div`
	display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  box-sizing: border-box;   
    height:500px;
  width : 80%;
  max-width: 2000px;
  margin : 0 10vw;
  min-height: 66vh;

  @media (max-width: 1075px) {
    max-width: 95vw;
    flex-direction: column;
    height: fit-content;
    padding: 40px 0 80px;
    }`
export const TextBox = styled.div`
  align-content: center;
  flex: 1 1 500%;
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  //max-height:500px;
  text-align: left;
  margin: 0 0 0 0;
  padding: 0 50px 0 50px;
  h1 {
    font-weight: 500;
    font-size: xxx-large;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Brightwall', cursive;
    color: #0A122A;  }
  p {
    font-weight: 400;
    font-size: large;
    color: #2b2b2b;
  }
  @media (max-width: 1050px) {
    padding: 0 5px 0 5px;
    h1 {
      font-weight: 6000;
      text-align: center;
    }
  }

`

export const AboutImage = styled.img`
  max-height: 450px;
  padding: 18px;
  align-content: center;
  border-radius: 7%;
  overflow: hidden;
  @media (max-width: 1000px) {
    flex-basis: 100%;
    height: auto;
    max-width: 90vw;
  }
`

export const ContactContainer = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  box-sizing: border-box;   
  width: 100%;
  max-width: 100%;
  text-align : center;

  background-color: #bdbdbd;
  h1 {
    font-family: 'Brightwall', cursive;
    font-weight: 500;
    font-size: xxx-large;
    margin-top: 0;
    margin-bottom: 0;
    color: #0A122A;
    padding-right: 20px;
    padding-left: 20px;
  }
  h2 {
    font-family: 'Brightwall', cursive;
    color: #0A122A;
  }
  @media (max-width: 500px) {
    padding: 20px 20px;
  }
`

export const MarketGrid = styled.div`
	display: grid;
  gap: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: black;
    padding: 50px 0;
 flex-basis: 100%;
  width : 95%;
  max-width: 2000px;

  @media (max-width: 1200px) {
  grid-template-columns: 1fr 1fr ;
 }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`


