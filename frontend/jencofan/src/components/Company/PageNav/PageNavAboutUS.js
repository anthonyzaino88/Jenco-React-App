import React from 'react'

import { ArrowIcon, Container, ProductPageNavTitle, ProductTitle } from './style'

const PageNavAboutUS = ({Location, Header}) => {
  return (
    <>
    <Container>
      <ProductPageNavTitle>{Location}</ProductPageNavTitle>
      <ArrowIcon/>
    <ProductTitle>{Header}</ProductTitle>
    </Container>
    </>
  )
}

export default PageNavAboutUS
