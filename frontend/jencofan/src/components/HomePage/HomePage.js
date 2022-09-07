import React from 'react'
import ImgEnd from './Body/ImgEnd'
import ImgStart from './Body/ImgStart'

import { Grid  } from './styles'
import Blocks from './ServiceBlocks/Blocks'

import { BlockOne, BlockTwo, BlockThree } from '../../pages/Data/HomeData'
import MySwiper from './Swiper/Swiper'

import Findlocator from './FindLocator/Findlocator'


const HomePage = () => {
  return (
  <>
    
    <MySwiper/>
   <Findlocator/>
    <Blocks/>
    <Grid>
    <ImgStart {...BlockOne}/>
    
    <ImgEnd {...BlockTwo}/>
    <ImgStart {...BlockThree}/>
    </Grid>
    
   
   
    </>
    
  )
}

export default HomePage
