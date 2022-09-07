import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { Refresh_Full, Refresh_Low, Refresh_Value } from './Data/data'
import { Container, Grid, Wrapper } from './style'


const ReFresh = () => {
  return (
    <>
    <PageNav {...Refresh_Full}/>
    <Wrapper>
    <Grid>
    <SideBar/>
    <Header {...Refresh_Full}/>
    <Container>
    <ProductsLayout {...Refresh_Full}/>
    <ProductsLayout {...Refresh_Low}/>
    <ProductsLayout {...Refresh_Value}/>
    </Container>
    </Grid>
    </Wrapper>
 
    </>
  )
}

export default ReFresh
