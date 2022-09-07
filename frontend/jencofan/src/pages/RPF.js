import React from 'react'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import Header from '../components/ProductsLayout/Header/Header'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { RPF_ARE, RPF_UBS, RPF_HRSB, RPF_HREB_, RPF_UBSRD, RPF_UBSRD_HT, RPF_TUB, RPF_TUB_HT, RPF_UBB, RPF_UBRD } from './Data/data'
import { Container, Wrapper, Grid } from './style'


const RPF = () => {
  return (
    <>
    <PageNav {...RPF_UBS}/>
    <Wrapper>
    <Grid>
    <SideBar/>
    <Header {...RPF_UBS} />
    <Container>
    <ProductsLayout {...RPF_UBS}/>
    <ProductsLayout {...RPF_ARE}/>
    <ProductsLayout {...RPF_HRSB}/>
    <ProductsLayout {...RPF_HREB_}/>
    <ProductsLayout {...RPF_UBSRD}/>
    <ProductsLayout {...RPF_UBSRD_HT}/>
    <ProductsLayout {...RPF_TUB}/>
    <ProductsLayout {...RPF_TUB_HT}/>
    <ProductsLayout {...RPF_UBB}/>
    <ProductsLayout {...RPF_UBRD}/>
    </Container>
    </Grid>
    </Wrapper>
    </>
  )
}

export default RPF
