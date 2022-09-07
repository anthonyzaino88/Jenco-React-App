import React from 'react'
import { Wrapper, Container, SearchInput, SearchIcon, SearchContainer, Results, Title } from './styles'

const CrossRef = () => {
  return (
    <>
      <Wrapper>
        <Container>
        
        <Title>Competitive Cross Reference</Title>
        <SearchContainer>
            <SearchInput
            placeholder='search product'
            ></SearchInput>
         
            <SearchIcon/>
            </SearchContainer>
            <Results></Results>
        </Container>
      </Wrapper>
    </>
  )
}

export default CrossRef
