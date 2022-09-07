import styled, { css } from "styled-components";
import { FaSearch } from 'react-icons/fa';



const iconStyles = css `
       display: flex;
       align-item: center;
       width: 3%;
       height: auto;

`;


export const Wrapper = styled.div`padding: 2rem
max-width: 500px;
max-height: auto;
background-color: ${({ theme }) => theme.bottomheader};
grid-column: 4;
grid-row: auto;
border-radius: 6px;

`;

export const Container = styled.div`padding: 1rem
width: 100%;
height: auto;
padding: 1rem;
`;

export const Title = styled.h2`
color: ${({ theme }) => theme.topheader};
opacity: .7;
padding: 1rem;
border-radius: 5px;


`;



export const SearchContainer = styled.div`
display: flex;

`

export const SearchInput = styled.input`

width: 100%;
`;

export const SearchIcon = styled(FaSearch)`

    ${iconStyles};
`;




export const Results = styled.div`
height: auto;
background-color: white;

`; 

