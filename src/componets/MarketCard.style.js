import {Card, CardMedia} from "@material-ui/core";
import styled from "styled-components";


export const MarketCardContainer = styled(Card)`
	display: flex;
	flex-direction: column;
  align-items: flex-start;
    border-radius: 12px;
    padding: 35px;
  overflow-wrap: normal;
  //height: 400px;

  h2 {
    font-weight: normal;
    letter-spacing: 0.23px;
    color:black;
    font-size: x-large;
  }
  	h3 {
      text-align: left;
			font-weight: 10;
			letter-spacing: 0.23px;
      font-size: smaller;
      white-space: pre-line;
      color: black;

    }
	
`;
export const HeaderContainer = styled.div`
  width:100%;
  flex:20%;

`;
export const DetailsContainer = styled.div`
  width:100%;
  flex:50%;
  align-content: center;

`;export const SocialMediaContainer = styled.div`
	display: flex;
  justify-content: center;
  flex:10%;
  align-content: flex-end;
  flex-direction: row;
    max-height: 600vh;
  width:100%

`;
export const MarketingImg = styled.img`
  overflow: hidden;
  text-align:center;
  margin:auto;
  align-content: center;
  flex: 35%;
  color: #5b7e63;
  width: 5vw;

  filter: invert(7%) sepia(7%) saturate(7498%) hue-rotate(194deg) brightness(100%) contrast(101%);
  @media (max-width: 1000px) {
    width: 15vw;

  }


`




