import React from 'react'
import { Container, CTAbutton, Disc, Title, ButtonWrapp, LocatorBody } from './styles'

const Findlocator = () => {
  return (
    <>
      <Container>
        <Title>Advancing Ventilation™</Title>
            <Disc>Find a reperesnative near you and start breathing cleaner air</Disc>
            <LocatorBody>
            <ButtonWrapp>
                <CTAbutton>Find Rep</CTAbutton>
                </ButtonWrapp>
                </LocatorBody>
      </Container>
    </>
  )
}

export default Findlocator
