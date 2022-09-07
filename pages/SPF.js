import React from 'react'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import Header from '../components/ProductsLayout/Header/Header'
import { SPF_ACF, SPF_DDE_DDS, SPF_DFE_DFS, SPF_GED, SPF_L2E_L2S, SPF_L3E_L3S, SPF_LCE_LCS, SPF_WA } from './Data/data'
import { Container, Grid, Wrapper } from './style'

const SPF = () => {
  return (
    <>
    <PageNav {...SPF_ACF}/>
    <Wrapper>
    <Grid>
    <SideBar/>
    <Header {...SPF_ACF}/>
    <Container>
    <ProductsLayout {...SPF_ACF}/>
    <ProductsLayout {...SPF_WA}/>
    <ProductsLayout {...SPF_LCE_LCS}/>
    <ProductsLayout {...SPF_L2E_L2S}/>
    <ProductsLayout {...SPF_L3E_L3S}/>
    <ProductsLayout {...SPF_GED}/>
    <ProductsLayout {...SPF_DFE_DFS}/>
    <ProductsLayout {...SPF_DDE_DDS}/>
    </Container>
    </Grid>
    </Wrapper>
    </>
  )
}

export default SPF
