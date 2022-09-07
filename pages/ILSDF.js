import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { ILSDF_CFD, ILSDF_CTB, ILSDF_MIXVENT, ILSDF_POWERVENT, ILSDF_PRF_RADON, ILSDF_PVDEDPV, ILSDF_SILENT, ILSDF_SMXD, ILSDF_SMXDK, ILSDF_SMXDK_HT, ILSDF_SMXD_HT, ILSDF_SQB, ILSDF_SQD_eSQD, ILSDF_SWF } from './Data/data'
import { Container, Wrapper, Grid } from './style'


const ILSDF = () => {
  return (
    <>
    <PageNav {...ILSDF_CFD}/>
    <Wrapper>
    <Grid>
    <SideBar/>
    <Header {...ILSDF_CFD}/>
    <Container>
    <ProductsLayout {...ILSDF_MIXVENT}/>
    <ProductsLayout {...ILSDF_SILENT}/>
    <ProductsLayout {...ILSDF_PVDEDPV}/>
    <ProductsLayout {...ILSDF_POWERVENT}/>
    <ProductsLayout {...ILSDF_PRF_RADON}/>
    <ProductsLayout {...ILSDF_SWF}/>
    <ProductsLayout {...ILSDF_SMXD}/>
    <ProductsLayout {...ILSDF_SMXD_HT}/>
    <ProductsLayout {...ILSDF_SMXDK}/>
    <ProductsLayout {...ILSDF_SMXDK_HT}/>
    <ProductsLayout {...ILSDF_SQB}/>
    <ProductsLayout {...ILSDF_SQD_eSQD}/>
    <ProductsLayout {...ILSDF_CTB}/>
    <ProductsLayout {...ILSDF_CFD}/>
    </Container>
    </Grid>
    </Wrapper>

    </>
  )
}

export default ILSDF
