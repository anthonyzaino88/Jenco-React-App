import styled from "styled-components";
import { b } from "../../../styles/variables";



export const Card = styled.div`
  display: flex;
 

  @media ${b.xxl},
  ${b.xl},
  ${b.lg} {
    display: flex;
  
    justify-content: space-evenly;
  }

  

`;


export const Container = styled.div`

grid-column: 1/3;
grid-row: auto;
border-radius: 6px;
height: auto;
display: grid;
padding: .5rem;

@media ${b.xxl},${b.xl},${b.lg}, ${b.md}, {
    height: 600px;
}

`;

export const ContainerImgEnd = styled.div`

grid-column: 1/3;
grid-row: auto;
border-radius: 6px;
height: auto;
display: grid;
 background-color: #f8f8f8;
padding: .5rem;

@media ${b.xxl},${b.xl},${b.lg}, ${b.md}, {
    height: 600px;
}


`;

export const Left = styled.div`
align-self: center;
`;

export const Right = styled.div`
align-self: center;
`
;

export const LeftImg = styled.img`
padding: 3px;
border-radius: 10px;
width: 100%;

@media ${b.lg} {
width: 100%;
}

`;

export const LeftContent = styled.div`
padding: 2rem;
margin-top: 2rem;
margin-bottom: 1rem;
letter-spacing: 2px;
font-size: 20px;
width: 500px;
display: none;

@media ${b.xxl},
${b.xl},
${b.lg},
${b.md},
{
display: grid;
}

`;

export const RightContent = styled.div`
padding: 2rem;
margin-top: 2rem;
margin-bottom: 1rem;
letter-spacing: 2px;
font-size: 18px;
width: 500px;
display: none;

@media ${b.xxl},
${b.xl},
${b.lg},
${b.md},
{
display: grid;
}

`;

export const RightImg = styled.img`
padding: 3px;
border-radius: 10px;
width: 100%;

@media ${b.lg} {

width: 100%;
}

`;

export const ContentTitle = styled.h1`
padding-left: 2rem;
color: #212529;
display:none;

@media ${b.xxl},
${b.xl},
${b.lg},
${b.md},
{
display: grid;
}


`;



export const ProductLinkLeft = styled.a`
text-decoration: none;
font-size: 18px;

border-radius: 10px;
background: #f8f8f8;
color: #212529;
float: left;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
margin-left: 1.5rem;
padding: .5rem 1rem;
transition: ease-in-out .2s;

&:hover {

  box-shadow: none;
  cursor: pointer;
}


`;

export const ProductLinkRight = styled.a`
text-decoration: none;
font-size: 18px;

border-radius: 10px;
background: white;
color: #212529;
float: left;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
margin-left: 1.5rem;
padding: .5rem 1rem;
transition: ease-in-out .2s;

&:hover {

  box-shadow: none;
  cursor: pointer;
}


`;



