import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { GV_BGH, GV_RCXII_SF, GV_RLX } from './Data/data'
import { Container, Grid, Wrapper } from './style'


const GravityVents = () => {
  return (
    <>
    <PageNav {...GV_BGH}/>
    <Wrapper>
    <Grid>
    <SideBar/>
    <Header {...GV_BGH}/>
    <Container>
     <ProductsLayout {...GV_RCXII_SF}/>
     <ProductsLayout {...GV_RLX}/>
     <ProductsLayout {...GV_BGH}/>
     </Container>
     </Grid>
     </Wrapper>
    </>
  )
}

export default GravityVents
