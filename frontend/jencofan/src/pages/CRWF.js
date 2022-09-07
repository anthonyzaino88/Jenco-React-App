import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { CRWF_LPD_SF, CRWF_SDB, CRWF_SDBD, CRWF_STXB, CRWF_STXB_HT2_HT, CRWF_STXD, CRWF_CWD } from './Data/data'
import { Container, Grid, Wrapper } from './style'

const CRWF = () => {
  return (
    <>
      <PageNav {...CRWF_CWD}/>
      <Wrapper>
      <Grid>
      <SideBar/>
      <Header {...CRWF_CWD}/>
      <Container>
      <ProductsLayout {...CRWF_SDBD}/>
      <ProductsLayout {...CRWF_SDB}/>
      <ProductsLayout {...CRWF_STXD}/>
      <ProductsLayout {...CRWF_STXB}/>
      <ProductsLayout {...CRWF_STXB_HT2_HT}/>
      <ProductsLayout {...CRWF_LPD_SF}/>
      <ProductsLayout {...CRWF_CWD}/>
      </Container>
      </Grid>
      </Wrapper>
    </>
  )
}

export default CRWF
