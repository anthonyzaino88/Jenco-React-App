import React from 'react'
import { Left, LeftContent, Right, ContentTitle, RightImg, ContainerImgEnd, Card, ProductLinkLeft } from './style'

const ImgEnd = ({ Img, Body, Title, ButtonLink, Button }) => {
  return (
    <>
    <ContainerImgEnd>
    <Card>
      <Left>
        <ContentTitle>{Title}</ContentTitle>
        <LeftContent>{Body}</LeftContent>
        <ProductLinkLeft href={ButtonLink}>{Button}</ProductLinkLeft>
     </Left>
   
 
    <Right>
        <RightImg
         src={Img} alt='block'

        >

        </RightImg>
    </Right>
    </Card>
</ContainerImgEnd>
    </>
  )
}

export default ImgEnd
