import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { JetFans_IFAB_IFEB, JetFans_IFFT, JetFans_TJFU, JetFans_VGD } from './Data/data'
import { Container, Wrapper, Grid } from './style'


const Jetfans = () => {
  return (
    <>
   <PageNav {...JetFans_IFAB_IFEB} />
   <Wrapper>
   <Grid>
   <SideBar/>
   <Header {...JetFans_IFAB_IFEB}/>
   <Container>
   <ProductsLayout {...JetFans_IFFT}/>
   <ProductsLayout {...JetFans_TJFU}/>
   <ProductsLayout {...JetFans_IFAB_IFEB}/>
   <ProductsLayout {...JetFans_VGD}/>
   </Container>
   </Grid>
   </Wrapper>


   
    </>
  )
}

export default Jetfans
