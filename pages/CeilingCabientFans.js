import React from 'react'
import Header from '../components/ProductsLayout/Header/Header';
import PageNav from '../components/ProductsLayout/PageNav/PageNav';
import ProductsLayout from '../components/ProductsLayout/ProductsLayout';
import SideBar from '../components/ProductsLayout/SideBar/SideBar';
import { Container, Grid, Wrapper } from './style';

import { CCF } from './Data/data';



const CeilingCabientFans=  () => {
  return (
  <>

<PageNav {...CCF}/>

<Wrapper>
<Grid>
   <SideBar/>
   <Header {...CCF}/>
  <Container>
  <ProductsLayout {...CCF}/>
  </Container>
  </Grid>
  </Wrapper>


</>
  )
}

export default CeilingCabientFans;

