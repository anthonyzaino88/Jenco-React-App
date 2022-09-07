import React from 'react'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import PageNav from '../components/ProductsLayout/PageNav/PageNav';
import { CFSF_CSF, CFSF_KSFV, CFSF_LSF } from './Data/data'
import SideBar from '../components/ProductsLayout/SideBar/SideBar';
import Header from '../components/ProductsLayout/Header/Header';
import { Container, Grid, Wrapper } from './style';


const CentrifugalFilteredSupplyFans = () => {
  return (
  <>
 <PageNav {...CFSF_CSF}/>
 <Wrapper>
 <Grid>
 <SideBar/>
 <Header {...CFSF_CSF}/>
 <Container>
<ProductsLayout {...CFSF_KSFV}/>
<ProductsLayout {...CFSF_CSF}/>
<ProductsLayout {...CFSF_LSF}/>
</Container>
</Grid>
</Wrapper>
  </>
  )
}

export default CentrifugalFilteredSupplyFans
