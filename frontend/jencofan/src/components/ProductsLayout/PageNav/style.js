import styled, { css } from "styled-components";
import { FaChevronRight } from 'react-icons/fa'
import { b } from "../../../styles/variables";

export const Container = styled.div`

display: none;
padding:1rem;
gap: 10px;
position: fixed;
width: 100%;

background: ${({ theme }) => theme.topheader};
color: white;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
align-items: end;

@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {

display: flex;


}


`;



export const  ProductPageNavTitle = styled.div`

`;

export const ProductTitle = styled.div``;

export const iconStyles = css `
       display: block;
       width: auto;
       height: auto;
       color: ${({ theme }) => theme.arrowIcon};

`;

export const ArrowIcon = styled(FaChevronRight)`
    ${iconStyles}

`;