import React from 'react'
import { BlocksContainer, BlocksGrid, ServicesFour, ServicesOne, ServicesThree, ServicesTwo, ServiceTitle } from './styles'

const Blocks = () => {
  return (
    <>
     <BlocksContainer>
     <BlocksGrid>
     
    <ServicesOne href='/products'> 
    <ServiceTitle>Residential</ServiceTitle>
    </ServicesOne>
  
 
    

    <ServicesTwo
    href='/products'><ServiceTitle>Commercial</ServiceTitle></ServicesTwo>

    <ServicesThree href='/products'> <ServiceTitle>Multi-Family</ServiceTitle></ServicesThree>

    <ServicesFour href='/products'> <ServiceTitle>Code Solutions</ServiceTitle></ServicesFour>


     </BlocksGrid>
     </BlocksContainer>

      
    </>
  )
}

export default Blocks;
