import styled from "styled-components";
import { b } from "../../styles/variables";



export const Container = styled.div`
display: grid;
grid-template-columns: auto;
grid-template-rows: auto;
justify-content: space-evenly;

@media ${b.xxl}, ${b.xl}, ${b.lg} {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-template-rows: auto;
justify-content: space-evenly;


}

`;




export const SolerPalau = styled.div`
grid-column: 1;
grid-row: 1;
color:#f8f8f8;
margin-top: 2rem;


@media ${b.xxl} ${b.xl}, ${b.lg} {
    grid-row: 1;
    grid-column: 1;
    display: flex;
    align-self: center;
    background: #212529;
    margin-top: 0rem;
    height: 900px;
    width: 100%;
}
`;

export const SolerPalauImg = styled.img`
opacity: 1;
width: 100%;
height: 100%;
box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
mask-image: linear-gradient(to bottom, white 70% , transparent);

@media ${b.xxl}, ${b.xl}, ${b.lg} {
display: none;
}

@media ${b.md},  ${b.sm} {
    height: 900px;
}

`;





export const TopDesktopImgContainer = styled.div`
    display: none;

@media ${b.xxl}, ${b.xl}, ${b.lg} {
    
    width : 100%;
    height: 900px;
    display: flex;
    grid-column: 2;
    grid-row: 1;
   
    justify-content: right;
    gap: 10px;
    opacity: 1;
 
}
    

`;

export const TopDtImgThree  = styled.img`
display: none;

@media ${b.xxl}, ${b.xl}, ${b.lg} {
    display: block;
    width: 300px;
    width: 300px;
   
}

`;

export const TopDtImgTwo = styled.img`
display: none;

@media ${b.xxl}, ${b.xl}, ${b.lg} {
    display: block;
    width:  300px;
    height: 300px;

}
`;

export const TopDtImgOne = styled.img`
display: none;

@media ${b.xxl}, ${b.xl}, ${b.lg} {
    display: block;
    width: 300px;
    width: 300px;
    
}

`; 



export const HeaderTitle = styled.h1`
font-weight: 400;
letter-spacing: 2px;
font-size: 50px;
grid-row: 1;
grid-column: 1;
margin-bottom: 1rem;
padding-left: 1rem;
align-self: left;

@media ${b.xxl}, ${b.xl} ${b.lg}, ${b.md} {
   
    
}

`;

export const HeaderContainer = styled.div`

display:flex;
width: 100%;
height: 150px;
box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;


export const JencoFanImg = styled.img`
    height: 350px;
    width: 350px;
    padding: 2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {
    height: 500px;
    width: 500px;
    padding: 2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    

}

`;

export const ImgWrapper = styled.div`
grid-column: 1;
grid-row: 1;
z-index: -1;


@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {

grid-column: 1/3;
grid-row: 1;
z-index: -1;

}

`;

export const ImgWrapperTwo = styled.div`
grid-column: 1;
grid-row: 5;
@media ${b.xxl}, ${b.xl}, ${b.lg}, ${b.md} {
margin-top: 6rem;
grid-row: 3;
grid-column: 1;
padding-left: 5rem;
}

`;


export const Wrapper = styled.div`
    display:flex;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem;
    flex-direction: column;
   align-self: center;
   
`;

export const Title = styled.div`
    font-size: 29px;
    letter-spacing: 1px;
    font-weight: 400;
    padding-left: 1rem;
    color: #d9534f;
`;

export const TitleTwo = styled.div`
 font-size: 40px;
    letter-spacing: 1px;
    font-weight: 400;
    padding-left: 1rem;
    color: #d9534f;
`;


export const Content = styled.div`
    font-weight: 500;
    font-size: 13px;
    margin-top: 1rem;
    



`;

export const Hero = styled.div`
    width: 100%;
    margin-top: 15px;
    height: 100%;
    
   
`;

export const HeroImg = styled.img`
width: 100%;
height: 100%;


`;

export const Description = styled.div`
width: auto;
padding: 1rem;
font-size: 20px;
letter-spacing: 4px;


`;

export const DescriptionTwo = styled.div`
width: 100%;
padding: 1rem;
font-size: 20px;
letter-spacing: 4px;
@media ${b.xxl}, ${b.xl}, ${b.lg} {
 width: 100%;
padding: 1rem;
font-size: 20px;
letter-spacing: 4px;
   
}


`;



export const JencoFan = styled.div`
grid-column: 1;
grid-row: 4;

@media ${b.xxl}, ${b.xl}, ${b.lg} {
    grid-row: 3;
    grid-column: 2;
    padding-right: 5rem;
    margin-top: 6rem;
   
}

`;

export const BottomImgContainer = styled.div`
display: none;
@media ${b.xxl}, ${b.xl}, ${b.lg} {
   display:flex;
   
}


`;

export const BottomImgOne = styled.img`
display: none;
@media ${b.xxl}, ${b.xl}, ${b.lg} {
    display: block;
}

`;

export const BottomImgTwo = styled.img`
display: none;
@media ${b.xxl}, ${b.xl}, ${b.lg} {
    display: block;
}

`;

export const BottomImgThree = styled.img`
display: none;
@media ${b.xxl}, ${b.xl}, ${b.lg} {
    display: block;
}

`;