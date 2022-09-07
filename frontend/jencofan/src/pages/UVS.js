import React from 'react'
import Header from '../components/ProductsLayout/Header/Header'
import PageNav from '../components/ProductsLayout/PageNav/PageNav'
import ProductsLayout from '../components/ProductsLayout/ProductsLayout'
import SideBar from '../components/ProductsLayout/SideBar/SideBar'
import { USV_CM } from './Data/data'
import { Grid, Wrapper } from './style'


const UVS = () => {
  return (
    <>
<PageNav  {...USV_CM}/>
<Wrapper>
<Grid>
<SideBar/>
<Header {...USV_CM}/>
<ProductsLayout {...USV_CM}/>
</Grid>
</Wrapper>

    </>
  )
}

export default UVS
