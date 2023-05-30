import styled from "styled-components";
import {Card, CardMedia} from "@material-ui/core";


export const ProductCardContainer = styled(Card)`

	position: relative;
	display: flex;
	flex-direction: column;
	max-width: 90vw;
    max-height: 60vh;
  padding-bottom: 1em;
  border-radius: 12px;
  
  	h2 {
      padding-top:20px;
      padding-left:20px;
     color: #695a3e;
      text-align: left;
			font-size: 30px;
			font-weight: 1000;
			letter-spacing: -0.23px;
			line-height: 22px;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
  h3,p {
    padding-left:20px;
    padding-bottom: 0px;
    padding-top: 0px;
    margin-block: 0px;
    color: #83704e;
    text-align: left;
  }
  p{
    padding-top: 1em;
  }
`;
export const ProductImage = styled(CardMedia)`
  overflow: hidden;
  text-align:center;
  position:absolute;
  top:0; bottom:0;
  left:0; right:0;
  margin:auto;
  align-content: center;
  flex-basis: 100%;

 
`
export const ProductImageContainer = styled.div`
  height:300px;
  display:inline-block;
  position:relative;
`


