import styled, { css } from "styled-components";
import { Link }  from "react-router-dom";
import { v, b } from "../../../styles/variables";
import { FaBars, FaTimes, FaSearch, FaPhone } from 'react-icons/fa';

const btnReset = css `
cursor: pointer;
background: none;
border: none;
outline: none;
color: inherit;
font-family: inherit;
letter-spacing: inherit;
font-size: inherit;
padding: 0;

`;


export const SHeader = styled.div`
     margin: 0 auto;
    height: 100%;
    width: 100%;
    
    background: ${({theme}) => theme.bottomheader};
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    align-items: center;
    transition: 0.3s ease padding;
    padding: 0 ${v.lgSpacing};
    @media ${b.lg} {
        padding: 0 ${v.lgSpacing};
    }
    > div {
        flex: 1;
    }
   
`;

export const TopHeader = styled.div`
    margin: 0 auto;
    height: 0px;
    width: 100%;
    color: ${({theme}) => theme.primary};
    background: ${({theme}) => theme.bottomheader};
    display: flex;
    align-items: center;
    transition: 0.3s ease padding;
    padding: 0 ${v.lgSpacing};
 
   
    > div {
        flex: 1;
    }
   
`;

export const TopHeaderLeft = styled.div`
       display: flex;
       justify-content: flex-start;
       padding: ${v.smSpacing};
`;

export const TopHeaderRight = styled.div`
        display: flex;
        justify-content: flex-end;
        padding: ${v.smSpacing};
`;

export const SHeaderHeight = styled.div `
    height: 64px;
    
`;

export const SHeaderFixed = styled.div `
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: ${v.headerHeight};
    background: ${({ theme }) => theme.bg};
    z-index: 10;

`;

export const SImg = styled.img `
    width:200px;
    display: none;
    @media ${b.lg} {
        display: flex;
    }
`;

export const ImgContainer = styled.div `


`;





export const SearchContainer = styled.div `
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
       
   
`;

export const SearchInput = styled.div`

display: flex;
@media ${b.md} {
        display: flex;
        padding: ${v.smSpacing};
       }

`;

export const SearchBox = styled.input`
box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px, rgb(9 30 66 / 8%) 0px 0px 0px 1px;
padding: calc(${v.smSpacing} - 2px) ${v.mdSpacing};
border-radius: 6px;
margin-left: 10px;
`;

export const PhoneIconContainer = styled.div`

display: none;
@media ${b.xl} {
        display: flex;
        padding: ${v.smSpacing};
       }

`;




export const SubButtonContainer = styled.div `

        display: flex;
        align-items: center;
        @media ${b.md} {
        display: flex;
        
       }

`;

export const SubButton = styled.button `

    position: relative;
    background-color: #f8f9fa!important;
    color: #d9534f!important;
    box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px, rgb(9 30 66 / 8%) 0px 0px 0px 1px;
    margin-top: .5rem;
    text-decoration: none;
    transition: ease-in-out .2s;
    float: left;
    text-transform: uppercase;
    padding: .3rem .7rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
    text-align: center;
    vertical-align: middle;
    display: none;
    font-weight: 400;
    border: none;
       &:hover {
        box-shadow: none;
        
       }
       @media ${b.md}. ${b.lg}, ${b.xl}, ${b.xxl} {
        display: block;
       }

`;

export const SLogoLink = styled(Link) `
     
       display: flex;
       color: inherit;
       text-decoration: none;

`;

export const MobileLogo = styled.img `
       display: flex;
       justify-content: flex-start;
       @media ${b.lg} {
        display: none;
       }


`;

export const MobileTitle = styled.div `

display: flex;
       justify-content: center;
       @media ${b.lg} {
        display: none;
       }
    
       

`;


const iconStyles = css `
       display: block;
       width: 100%;
       height: 100%;

`;

const iconStylesSearch = css `
       display: block;
       width: auto;
       height: 100%;
       margin-left: 12px;
       margin-right: 5px;

`;


export const SMenuToggleButton = styled.button`
    ${btnReset}
    width: 32px;
    position: relative;
    z-index: 100;
    @media ${b.lg} {
        display: none;
    }
`;


export const MenuIcon = styled(FaBars) `
    ${iconStyles}
`;

export const SCloseIcon = styled(FaTimes)`
    ${iconStyles}
`;

export const SearchIcon = styled(FaSearch)`
    ${iconStylesSearch}
`;

export const PhoneIcon = styled(FaPhone)`
    ${iconStyles}
`;



export const SMenu = styled.div `
position: fixed;
    top: 64px;
    left: 100%;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.primary2};
    width: 100%;
    height: calc(100% - ${v.headerHeight});
    transition: 0.3s ease left;
    padding: ${v.lgSpacing};
    z-index: 9999;
    @media ${b.lg} {
        display: none;
    }



`;

export const NavContainer = styled.div `
       height: 100%;
       align-items:center;
       justify-content: center;
       display:none;
       @media ${b.lg} {
        display: flex;
       }


`;
