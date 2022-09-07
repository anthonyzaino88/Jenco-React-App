import React from 'react'
import { HeaderWrapp, ProductPageHeader, ProductTitleContainer } from './style'

const Header = ({Header}) => {
  return (
    <>
    <HeaderWrapp>
    <ProductTitleContainer>
      <ProductPageHeader>{Header}</ProductPageHeader>
      </ProductTitleContainer>
      </HeaderWrapp>
    </>
  )
}

export default Header
