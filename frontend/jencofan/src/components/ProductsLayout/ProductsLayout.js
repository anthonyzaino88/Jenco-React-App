import React from 'react'

import { ContainerLeft, ContainerRight, ProductDisc, ProductImg, ProductOverview, ProductDisc2, ProductDisc3, Button, CardWrapp, ProductImgMobile } from './style'

const ProductsLayout = ({Overview, Img, Disc, Disc2, Disc3, Link}) => {
  return (
    <>
  
      
      <CardWrapp>
        <ContainerLeft>
        <ProductImg src={Img} atl="Product-Img"></ProductImg>
      </ContainerLeft>
      <ContainerRight>
      <ProductDisc>
      {Disc}
      <ProductImgMobile src={Img} atl="Product-Img"></ProductImgMobile>
      </ProductDisc>
      <ProductDisc2>{Disc2}</ProductDisc2>
      <ProductDisc3>{Disc3}</ProductDisc3>
   
      <ProductOverview>{Overview}</ProductOverview>
      
      <Button href={Link}>View Product</Button>
      </ContainerRight>
      </CardWrapp>

    </>
  )
}

export default ProductsLayout;
