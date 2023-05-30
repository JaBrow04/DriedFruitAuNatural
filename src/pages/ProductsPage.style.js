import styled from "styled-components";

export const ProductGrid = styled.div`
	display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: white;
    border-bottom: black;
    padding: 50px;
 flex-basis: 100%;

 @media (max-width: 1600px) {
  grid-template-columns: 1fr 1fr 1fr ;
 }
 @media (max-width: 1200px) {
  grid-template-columns: 1fr 1fr ;
 }

 @media (max-width: 600px) {
      grid-template-columns: auto;
    }
 `
export const ProductContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-content: center;
 background-color: white;
 padding-top: 30px;
 @media (max-width: 600px) {
 }
`
export const HeaderContainer = styled.div`
 width:  67vw;
 padding: 30px 15vw;
 text-align: left;
 h1{
  color : #2a2924;
  font-size: xxx-large;

 }
 h3{
  color : #8E897B;
  font-weight: lighter;
  font-size: large;
 }
 @media (max-width: 600px) {
  margin: 0 15vw;

 }
 `



