import styled from "styled-components";
import { b } from "../../../styles/variables";


export const Container = styled.div `
padding: 2rem;
;

@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {
    padding: 5rem;
background: linear-gradient(#f8f8f8, #0000);
}

`;

export const Title = styled.h1`
text-align: center;
letter-spacing: 2px;
font-size: 50px;
margin-top: 2rem;

@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {
    text-align: center;
letter-spacing: 3px;
font-size: 45px;
margin-top: 3rem;
}

`;

export const Disc = styled.p`
text-align: center;
padding: 2rem;


`;

export const ButtonWrapp = styled.div`
padding: 1rem;
display: flex;
    justify-content: center;
`;

export const CTAbutton = styled.button`
padding: 1rem 2rem;
letter-spacing: 2px;
border: black 2px solid;
background: white;
font-weight: 600;
font-size: 15px;
transition: ease .3s;

&:hover {
    background: #212529;
    color: white;
}

`;

export const LocatorBody = styled.div``;