import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { ERV_TR, ERV_TRC, ERV_TRCe, ERV_TRe } from './Data/data'
import { Container, Grid, Wrapper } from './style'


const ERV = () => {
  return (
    <>
    <PageNav {...ERV_TR}/>
    <Wrapper>
    <Grid>
    <SideBar/>
    <Header {...ERV_TR}/>
    <Container>
    <ProductsLayout {...ERV_TR}/>
    <ProductsLayout {...ERV_TRe}/>
    <ProductsLayout {...ERV_TRC}/>
    <ProductsLayout {...ERV_TRCe}/>
    </Container>
    </Grid>
    </Wrapper>
   
        
    </>
  )
}

export default ERV
