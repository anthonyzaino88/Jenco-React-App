import styled from "styled-components";
import { Link }  from "react-router-dom";
import {  b  } from "../../../styles/variables";



export const SidebarContainer = styled.div`
display: flex;
overflow-x: scroll;
width: 100%;
height: auto;
grid-row: 1;
margin-top: 2rem;
gap: 20px;
padding-bottom: 3rem;
flex-direction: row;
scroll-snap-type: x mandatory;

-ms-overflow-style: none; 


@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {

   flex-direction: column;
    margin-top: 5rem;
    height: 700px;
    width: 350px;
    background: #f8f8f8;
    grid-row: 1 /5;
    grid-column: 1/2;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    border-radius: 10px;
    padding: 5.5px;
    overflow-y: scroll;
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

export const SidebarNav = styled.div `



`;

export const SideBarLinks = styled(Link) `
display: block;
text-decoration: none;
width: 100%;
height: 102px;
scroll-snap-align: start;
 &:hover {
    font-weight: bold;
    box-shadow: none;
 }


@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {

 text-decoration: none;
 color: black;
 display: block;
 background: transparent;
 border-radius: 10px;
 &:hover {
    font-weight: bold;
 }


}

`;

export const ImgWrapper = styled.div`
overflow: hidden;
width: 100%;
height: 100%;
`;

export const MobileImage = styled.img `
display: block;
margin-left:auto;
margin-right: auto;
width: 100px;
height: 100px;
border-radius: 80px;
object-fit: cover;

@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {

display: none;

}


`;

export const LabelTitle = styled.div`

 background: #f8f8f8;
 color: black;
 padding: 1px;
 letter-spacing: 0px;
 border-radius: 50%;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
 text-align: center;
 height: 100%;
 width: 100%;
 transition: ease-in-out .1s;
font-size: 10px;

@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {

   display: none;
}

`;

export const Title = styled.p`
font-size: 10px;
color: black;
margin-top: .5rem;
text-decoration: none;
`

export const TitleDesktop = styled.div`

display: none;


@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {

display: block;
}
`;