import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { KitchenHoods_EO, KitchenHoods_EOLC, KitchenHoods_EOLC_FPSP, KitchenHoods_EO_FPSP } from './Data/data'
import { Container, Grid, Wrapper } from './style'


const KitchenHoods = () => {
  return (
    <>
   <PageNav {...KitchenHoods_EO}/>
   <Wrapper>
   <Grid>
   <SideBar/>
   <Header {...KitchenHoods_EO}/>
   <Container>
   <ProductsLayout {...KitchenHoods_EO}/>
   <ProductsLayout {...KitchenHoods_EO_FPSP}/>
   <ProductsLayout {...KitchenHoods_EOLC}/>
   <ProductsLayout {...KitchenHoods_EOLC_FPSP}/>
   </Container>
   </Grid>
   </Wrapper>
    </>
  )
}

export default KitchenHoods
