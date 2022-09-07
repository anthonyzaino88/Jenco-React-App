import styled from "styled-components";

import { v, b, s } from "../../../styles/variables";


export const BlocksContainer = styled.div `

padding-left: 3rem;
padding-top: 2rem;
padding-right: 3rem;
margin-bottom: 5rem;
    
`;

export const BlocksGrid = styled.div`
    display: grid;
    grid-template-columns: auto;
    gap: 6rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

   @media ${b.md} {
    grid-template-columns: auto auto;
    gap: 5rem;
   }

   @media ${b.lg} {
    grid-template-columns: auto auto auto auto;
    gap: 1rem;
   }
    
    
 

`;


export const ServicesOne = styled.a`
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 text-decoration: none;
 height: 300px;

 background-image: url('https://solerpalau-usa.com/images/pages/homepage/residential.webp');
 
 transition: ease .3s;


 &:hover {
  box-shadow:#212529 0px 0px 0px 3px;
 }

  &:hover > h2 {
    background: #212529;
    color: white;
    opacity: 1;
    box-shadow:#212529 0px 0px 0px 3px;
 }
  
`;

export const ServicesTwo = styled.a`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('https://solerpalau-usa.com/images/pages/homepage/commercial.webp');
  height: 300px;
  text-decoration: none;
  
  transition: ease .3s;

 
  &:hover {
  box-shadow:#212529 0px 0px 0px 3px;
 }

  &:hover > h2 {
    background: #212529;
    color: white;
    opacity: 1;
    box-shadow:#212529 0px 0px 0px 3px;
 }
  


`;

export const ServicesThree = styled.a`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('https://milehighcre.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-28-at-2.11.33-PM.png');
  height: 300px;
  text-decoration: none;
  
  transition: ease .3s;
  
  &:hover {
  box-shadow:#212529 0px 0px 0px 3px;
 }

  &:hover > h2 {
    background: #212529;
    color: white;
    opacity: 1;
    box-shadow:#212529 0px 0px 0px 3px;
 }
  
  

`;

export const ServicesFour = styled.a`
background-repeat: no-repeat;
 background-size: cover;
  background-position: center;
  background-image: url('https://solerpalau-usa.com/images/pages/resources/code.webp');
  height: 300px;
  text-decoration: none;
  
  transition: ease .3s;
 
 
 
  &:hover {
  box-shadow:#212529 0px 0px 0px 3px;
 }

  &:hover > h2 {
    background: #212529;
    color: white;
    opacity: 1;
    box-shadow:#212529 0px 0px 0px 3px;
 }
  

`;

export const ServiceTitle = styled.h2`



color: ${({ theme }) => theme.topheader};
padding: 1rem;
color: #212529;
text-align: center;
margin-top: 302px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
transition: ease .3s;
opacity: .7;
letter-spacing: 2px;



`;


