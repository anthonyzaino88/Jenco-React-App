import styled, { css } from "styled-components";
import { FaChevronRight } from 'react-icons/fa'

export const Container = styled.div`
display: flex;
padding:1rem;
padding-left: 2.5rem;
gap: 10px;
width: 100%;
margin-top: 1rem;
background: ${({ theme }) => theme.topheader};
color: white;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
align-items: end;

`;

export const  ProductPageNavTitle = styled.div`

`;

export const ProductTitle = styled.div``;

export const iconStyles = css `
       display: block;
       width: 5%;
       height: 3%;
       color: ${({ theme }) => theme.arrowIcon};

`;

export const ArrowIcon = styled(FaChevronRight)`
    ${iconStyles}

`;