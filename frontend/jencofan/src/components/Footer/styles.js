import styled from "styled-components";
import { Link } from "react-router-dom";
import {  FaLinkedin, FaInstagram   } from "react-icons/fa"
import { CgFormatSlash } from "react-icons/cg";
import { b } from "../../styles/variables";


export const Container = styled.div`
    margin-top: 5rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 200px;
    grid-template-rows: auto;
    border-top: .5px solid lightgray;

@media ${b.sm} {
    margin-top: 5rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 450px;
    grid-template-rows: auto;
    border-top: .5px solid lightgray;
}    

@media ${b.md}  {
    grid-template-columns: 200px 400px 200px;
    justify-content: center;
}
    
@media ${b.lg} {
    grid-template-columns: 300px 400px 300px;
    margin-top: 5rem;
    padding: 1rem;
    justify-content: center;
}


@media ${b.xxl}, ${b.xl}
{   display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: auto;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
};


`;

export const Footerbg = styled.div`
    background-color: #f8f8f8;
   
`;

export const Insta = styled(FaInstagram)`
    color: #d9534f; 
    margin-right: 10px;
    font-size: 30px;
    transition: ease-in-out .2s ;

    &:hover {
      
        color: ${({ theme }) => theme.topheader};
        
  }
    
`;


export const Linkedin = styled(FaLinkedin) `
    color: #d9534f; 
    margin-right: 8px;
    font-size: 30px;
    transition: ease-in-out .2s ;

    &:hover {
        
        color: ${({ theme }) => theme.topheader};
        
  }
   
`;


export const SlashIcon = styled(CgFormatSlash)`
    display: block;
    height: 50px;
    color: ${({ theme }) => theme.topheader};
    align-self: center;
`;



export const FooterLinks = styled(Link)`
   text-decoration: none; 
   color: ${({theme}) => theme.topheader};
   padding: .3rem;
   transition: ease-in-out .2s ;

             &:hover {
                color: #d9534f;
             }
  
`;


export const FooterLinksBottom = styled(Link) `
text-decoration: none; 
   color: ${({theme}) => theme.topheader};
   padding: .3rem;
   transition: ease-in-out .2s ;
   align-self: center;

             &:hover {
                color: #d9534f;
             }
  
`;





export const FooterIcons = styled.a ``;

export const FooterTitle = styled.h3 `
    margin-bottom: 1rem;
   
        display: block;
    


`;

export const FooterTitleTop = styled.h3 `
    margin-bottom: 1rem;
    display: none;

   @media ${b.md}, ${b.lg}, ${b.xl} , ${b.xxl} {
        display: block;
    }


`;

export const FooterLinkRow = styled.div`
    display: flex;
    padding: .5rem;
    grid-column: 1/3;
    grid-row: 4;
    margin-left: auto;
    margin-right: auto;


 
    
    @media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md}
{   display: flex;
    height: auto;
    width: auto;
    padding: 1rem;
    grid-column: 2;
    grid-row: 2;
};
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

`;

export const ButtonCTA = styled.a`
    position: relative;
    background-color: #f8f9fa!important;
    color: #d9534f!important;
    box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px, rgb(9 30 66 / 8%) 0px 0px 0px 1px;
    font-weight: 500;
    margin-top: .5rem;
    text-decoration: none;
    border-radius: 10px;
    float: left;
    text-transform: uppercase;
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    transition: ease-in-out .3s ;

    &:hover {
       
        box-shadow : none;
        
  }

`;

export const Logo = styled.img`
  width: 100%;
`; 

export const FooterDisc = styled.p`
    margin-bottom: 10px;
`; 

export const SectionLeft = styled.div`



    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: auto;
    padding: 1rem;
    grid-column: 1/3;
    grid-row: 2;



    @media ${b.xxl},  ${b.xl} , ${b.lg} , ${b.md}
{    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: auto;
    padding: 1rem;
    grid-column: 1;
    grid-row: 1;
};

 

`;

export const CopyrightSection = styled.div`

    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-size: 13px;
    padding: .5rem;
    grid-column: 1/3;
    grid-row: 5;

@media ${b.sm}  {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-size: 13px;
    padding: .5rem;
    grid-column: 1/3;
    grid-row: 5;

}

    @media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md}
{    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: auto;
    padding: 1rem;
    grid-column: 1;
    grid-row: 2;
};


`;

export const FooterLinkRowContainer = styled.div`
    
 


    @media ${b.sm}, ${b.md} {
    


    }
 
    
    @media ${b.xxl}, ${b.xl}, ${b.lg}
{   display: flex;
    height: auto;
    width: auto;
    padding: 1rem;
    grid-column: 2;
    grid-row: 2;
};

`;

export const SectionRight = styled.div`
    
    padding: 1rem;
    grid-row: 1;
    grid-column: 1/3;
    display: block;
    margin-left: auto;
    margin-right: auto;


  @media ${b.sm} ${b.md}  {
    padding: 1rem;
    grid-row: 1;
    grid-column: 1/3;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }  

    @media ${b.xxl}, ${b.xl}, ${b.lg} , ${b.md}
{    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: auto;
    padding: 1rem;
    grid-row: 2;
    grid-column: 3;
};
    
`; 

export const NewsletterContainer = styled.div `
    height: auto;
    width: 100%;
    padding: 1rem;
    grid-column: 2;
    grid-row: 3;

    @media ${b.sm}  {
    height: auto;
    width: 100%;
    padding: 1rem;
    grid-column: 2;
    grid-row: 3;
    }

    @media ${b.xxl}, ${b.xl}, ${b.lg} , ${b.md}
{    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: auto;
    padding: 1rem;
    grid-column: 3;
    grid-row: 1;
};


`;

export const SectionNavLinks = styled.div `
    height: auto;
    width: 100%;
    padding: 1rem;
    grid-column: 1;


    @media ${b.sm} ${b.md} {

     height: auto;
    width: 100%;
    padding: 1rem;
    grid-column: 1;

    }

    @media ${b.xxl}, ${b.xl}, ${b.lg},${b.md}
{    display: block;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: auto;
    padding: 1rem;
    grid-column: 2;
};


`;

