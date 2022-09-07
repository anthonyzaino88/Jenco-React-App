import styled from "styled-components";

import { v, b } from "../../../../../styles/variables";

export const SDropdown = styled.div`
    background: ${({ theme }) => theme.bg};
    top: ${v.headerHeight};
    white-space: nowrap;
    padding: ${v.smSpacing};
    z-index: 9999;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    @media ${b.md} {
        min-width: 300%;
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
`;

export const STreeItem = styled.div`
    text-align: left;
    padding: ${v.smSpacing};
    &:hover {
       
        font-weight: bold;
  }
`;

export const STreeChild = styled.div`
    margin-top: ${v.smSpacing};
    background: rgba(255, 255, 255, 0.2);
`;