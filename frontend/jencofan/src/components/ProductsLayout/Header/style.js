import styled from "styled-components";
import { v, b } from "../../../styles/variables";


export const ProductTitleContainer = styled.div`
align-self: center;

`;

export const HeaderWrapp = styled.div `
width: 100%;
grid-column: 1/2;
grid-row: 2;
color: #212529;
padding: 1rem;
height: 80px;
display: flex;
justify-content: left;
font-size: 18px;

display: flex;



@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {
    
    margin-top: 8rem;
    height: auto;
    width: 100%;
    grid-column: 2/3 ;
    grid-row: 1;
    padding: ${v.mdSpacing};
    font-size: ${v.mdSpacing};
    color: ${({ theme }) => theme.primary2};
    background: ${({ theme}) => theme.topheader};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }


`;



export const ProductPageHeader = styled.h1 `

font-weight: 400;

`;

