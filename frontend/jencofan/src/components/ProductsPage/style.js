import { Link } from "react-router-dom";
import styled from "styled-components";

import { f, v, b } from "../../styles/variables";




export const HeroConatiner = styled.div`
    display: flex;
    flex-direction: column;
   
   
`;

export const Hero = styled.div`
   width: 100%;
    font-size: ${f.hero};
    padding: ${v.lgSpacing};
    color: ${({ theme }) => theme.primary2 };
    background: ${({ theme }) => theme.primary};

`;

export const HeroImg = styled.div`
 width: 100%;
 height: auto;

`;

export const ProductsGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 3rem;
margin-top: 5rem;


@media ${b.xxl} , ${b.xl}, ${b.lg}, ${b.md} {

padding-left: 12rem;
padding-right: 12rem;

}

@media ${b.sm} {
    padding: 0px
}


       

`;

export const ProductsCardWrapper = styled.div`
disply: block;
margin-left: auto;
margin-right: auto;

`;




export const ProductCards = styled.div`
 ;
 width: 100%;
 height: 100%;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
border-radius: 8px;
`;

export const ProductsImageWrapper = styled.div`
width: 350px;
height: 300px;
display: block;
margin-left: auto;
margin-right: auto;
padding: 1rem;

`;

export const ProductsImg = styled.img`
width: 100%;
height: 100%;
`;

export const TitleWrapper = styled.div`
display: flex;
justify-content: center;
padding: .5rem;
width: 350px;
height: 100px;
`;

export const Title = styled.h3`
color: black;
padding: 2rem;

`;

export const DescWrapper = styled.div``;

export const Description = styled.p``;

export const ProductLinkWrapper = styled.div`
display: flex;
justify-content: center;
padding: 1rem;
`;

export const ProductLink = styled(Link)`
text-decoration: none;
color: black;
margin-top: 2rem;
padding: .5rem 1rem;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
border-radius: 8px;
transition: ease-in-out .2s;

&:hover {
    box-shadow: none;
}

`;