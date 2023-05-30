import styled from "styled-components";
export const FooterContainer = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom:0;
  height: 30vh;
  max-height: 30vh;
  width: 100%;
  max-width: 100%;
background: #5b7e63;
  text-align: center;
`;


export const FooterTextBox = styled.div`
  display: flex;
  height: 10vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 15px;
  bottom:0;
  text-align: center;
  font-weight: 100;
  letter-spacing: 0.23px;
  font-size: larger;
  white-space: pre-line;
  color: black;
  max-height: 30vh;
  h1{
    font-family: 'Brightwall', cursive;
    color: #0A122A;
    font-size: xxx-large;
    font-weight: normal;
    margin: 1px;
  };
  p{
    color: #FBFAF8;
    margin: 4px;
  }
  @media (max-width: 400px) {
    h1{
     font-size: xx-large;
    };
    p{
      font-size: small;
    }
  }
  
  ;
`
export const FooterSocialMediaContainer = styled.div`
	display: flex;
  justify-content: center;

  align-content: flex-end;
  flex-direction: row;
    max-height: 600vh;
  width:100%

`;