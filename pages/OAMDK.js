import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { OAMDK__ } from './Data/data'
import { Container, Grid, Wrapper } from './style'


const OAMDK = () => {
  return (
    <>
 <PageNav  {...OAMDK__}/>
 <Wrapper>
 <Grid>
 <SideBar/>
 <Header {...OAMDK__}/>
 <Container>
 <ProductsLayout {...OAMDK__}/>
 </Container>
 </Grid>
 </Wrapper>
    
    </>
  )
}

export default OAMDK
