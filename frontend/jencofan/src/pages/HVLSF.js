import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { HVLSF_Tempest, HVLSF_Tornado } from './Data/data'
import { Container, Grid, Wrapper } from './style'


const HVLSF = () => {
  return (
    <>
<PageNav {...HVLSF_Tempest}/>
<Wrapper>
<Grid>
<SideBar/>
<Header {...HVLSF_Tempest}/>
<Container>
<ProductsLayout {...HVLSF_Tornado}/>
<ProductsLayout {...HVLSF_Tempest}/>
</Container>
</Grid>
</Wrapper>
</>
  )
}

export default HVLSF
