import styled from "styled-components";

import { b } from "../styles/variables";

export const Container = styled.div`


padding: 2px;
height: 100%;
width: 380px;
grid-column: 1/2;
grid-row: 3;
overflow-y: scroll;
@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {


padding: 5px;
height: 575px;
width: 100%;
grid-column: 2/ 3;
grid-row: 2/ 3;
gap: 1rem;
overflow-y: scroll;
background: white;
border-radius: 10px;
scroll-snap-type: y mandatory;

-ms-overflow-style: none; 

::-webkit-scrollbar-thumb {
    background: #888;
    
}
::-webkit-scrollbar-track {
  background: none; 
 
  
}

::-webkit-scrollbar {
  width: 5px;


}



::-webkit-scrollbar-button{
    content: "\f077";
    font-family: FontAwesome;
    font-size: 5px;


}

}





`;


export const Grid = styled.div`

@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {
  display: grid;
grid-template-rows: auto ;
grid-template-columns: auto auto ; 
gap: 2rem;
place-items: center;
margin-top: 1rem;
}



display: grid;
grid-template-rows: auto ;
grid-template-columns: auto; 
gap: 2rem;
place-items: center;
margin-top: 1rem;

`;

export const Wrapper = styled.div`
max-width: auto;
margin: auto;

@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {

max-width: 1400px;
margin: auto;
}


`;