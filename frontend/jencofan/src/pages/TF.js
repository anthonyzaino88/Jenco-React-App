import React from 'react'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import Header from '../components/ProductsLayout/Header/Header'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'

import { TF_DA, TF_TDB, TF_TDD } from './Data/data'
import { Container, Grid, Wrapper } from './style'


const TF = () => {
  return (
    <>
   <PageNav {...TF_DA}/>
   <Wrapper>
   <Grid>
   <SideBar/>
   <Header {...TF_DA}/>
   <Container>
   <ProductsLayout {...TF_DA}/>
   <ProductsLayout {...TF_TDB}/>
   <ProductsLayout {...TF_TDD}/>
   </Container>
   </Grid>
   </Wrapper>
    </>
  )
}

export default TF
