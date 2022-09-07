import React from 'react'
import { Card, Container, ContentTitle, Left, LeftImg, Right, RightContent, ProductLinkRight } from './style'


const ImgStart = ({ Img, Body, Title, ButtonLink, Button }) => {
  return (
    <>
<Container>
<Card>
    <Left>
        <LeftImg
        src={Img} alt='block'
        ></LeftImg>

    </Left>
    <Right>
        <ContentTitle>{Title}</ContentTitle>
        <RightContent>{Body}</RightContent>
    <ProductLinkRight href={ButtonLink}>{Button}</ProductLinkRight>
    </Right>
    </Card>
    </Container>
      
    </>
  )
}

export default ImgStart
