
import styled from "styled-components";
import { b } from "../../styles/variables";



export const CardWrapp = styled.div`

@media ${b.xxl}, ${b.xl}, ${b.lg} {
height: auto;
width: 100%;
display: flex;
border-radius: 10px;
background: #f8f8f8;
margin-bottom: 2rem;
box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
scroll-snap-align: start;

}



width: 100%;
height: auto;
display: block;
border-radius: 10px;
background: #f8f8f8;
margin-bottom: 2rem;
box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
scroll-snap-align: start;
`;



export const ContainerLeft = styled.div`
padding: .5rem;

`;

export const ContainerRight = styled.div`
padding: 2rem;


`;

export const ProductImg = styled.img`
padding-top: 1rem;
padding-left: 1rem;
display:none;

@media ${b.xxl}, ${b.xl}, ${b.lg} ${b.md} {
 padding-top: 2rem;
padding-left: 2rem;
display: block;


}


`;

export const ProductImgMobile = styled.img `

display: block;
margin-left: auto;

@media ${b.xxl}, ${b.xl}, ${b.lg} ${b.md} {
 padding-top: 2rem;
padding-left: 2rem;
display: none;


}

`;

export const ProductDisc = styled.div` font-size: 40px;
padding: .5rem;
display: flex;

@media ${b.xxl}, ${b.xl}, ${b.lg} ${b.md} {}

`;

export const ProductDisc2 = styled.div`
font-size: 20px;
padding: .5rem;
color: #888;

@media ${b.xxl}, ${b.xl}, ${b.lg} ${b.md} {

    font-size: 30px;
padding: .5rem;
color: #888;

}

`;

export const ProductDisc3 = styled.div` font-size: 15px;
padding-bottom: .5rem;
font-weight: 400;

@media ${b.xxl}, ${b.xl}, ${b.lg} ${b.md} {
    padding-bottom: .5rem;
font-weight: 700; 
}

`;

export const ProductOverview = styled.div`
padding-bottom: 2rem;
padding-top: 2rem;
font-size: 14px;
letter-spacing: 1px;


@media ${b.xxl}, ${b.xl}, ${b.lg} ${b.md} {
    padding-bottom: 2rem;
padding-top: 2rem;
font-size: 18px;
letter-spacing: 1px;
}


`;

export const Button = styled.button`
float:right;
    border-radius: 6px;
    padding: .5rem 2rem;
    box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px, rgb(9 30 66 / 8%) 0px 0px 0px 1px;
    border: none;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    background:  #f8f8f8;
   margin-top: -20px;
    margin-right: -1rem;
    
    &:hover {
        box-shadow: none
    }
`;
