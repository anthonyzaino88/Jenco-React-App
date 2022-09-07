import styled from "styled-components";

import { v, b } from "../../styles/variables";

export const SHomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${v.headerHeight} - ${v.lgSpacing} * 2);
`;

export const STitle = styled.h1`
    color: ${({ theme }) => theme.primary};
`;

export const Grid = styled.div`
@media ${b.lg} {
    display: grid;
    gap: 1rem;
    
}
    display: grid;
   
    gap: 1rem;
    margin-top: 1rem;
`;


