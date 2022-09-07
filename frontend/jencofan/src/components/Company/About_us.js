import React from 'react'
import { Container, Wrapper, Title, Content, Description, SolerPalau, JencoFan, SolerPalauImg, ImgWrapper, JencoFanImg, ImgWrapperTwo, HeaderTitle, TitleTwo,  DescriptionTwo, TopDesktopImgContainer, TopDtImgOne, TopDtImgTwo, TopDtImgThree, BottomImgContainer } from './styles'
import JencoImg from '../../assests/img/jencoseal.webp'
import Img2 from '../../assests/img/coolfans.webp'
import ImgDK from '../../assests/img/coolfansDT.webp'
import TopImg1 from '../../assests/img/new-warehouse.jpg'
import TopImg2 from '../../assests/img/history2.jpg'
import TopImg3 from '../../assests/img/histroy3.jpg'
import { Swiper, SwiperSlide  } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

import "./styles.css";

const ABOUT_US = () => {
  return (
    <>
    
      
<Container>

<SolerPalau>
 <Wrapper>
 <HeaderTitle>Our Story</HeaderTitle>
      <Title>
       Soler & Palau Ventilation Group
      </Title>
        <Content>
        <Description>
        In 1951 Eduard Soler and Josep Palau, both born in Ripoll, Spain, founded the company Soler & Palau .
        Soler & Palau Ventilation Group is the world's leading fan manufacturer.
        Soler & Palau can offer a range of ventilation products benefiting from over 60 years of experience within the industry.
        </Description>
        </Content>
      </Wrapper>
      </SolerPalau>
      <TopDesktopImgContainer>

      <Swiper
      slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 5000}}
        navigation={true}
       
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><p className='title-slider'>First premises of the S&P factory. Calle Viñas, No. 1. Ripoll</p>
        <TopDtImgTwo src={TopImg2} alt="img2"/>
        </SwiperSlide>
        <SwiperSlide><p className='title-slider'>First series of products</p>
        <TopDtImgThree src={TopImg3} alt="img3"/>
        </SwiperSlide>
        <SwiperSlide><p className='title-slider'>Second expansion of the factory (c. 1959)</p>
        <TopDtImgOne src={TopImg1} alt="img1"/>
        </SwiperSlide>
        
      </Swiper>
</TopDesktopImgContainer>
 
    
    <ImgWrapper>
    <SolerPalauImg src={Img2} alt="S&P" />
     
      </ImgWrapper>
      <JencoFan>
      <Wrapper>
      <TitleTwo>
       JenCoFan
      </TitleTwo>
        <Content>
        <DescriptionTwo>
        It was Jenn-Aire who pioneered the industry's first spun aluminum exhaust fans over 60 years ago!
        A commercial division was formed called Jenn Industries. 
        Maytag Corporation bought Jenn Industries and United bought Jenn-Aire.
        In 1988, Maytag sold Jenn Industries fans division to Snyder General, relocated toJacksonville, Florida and became JencoFan.
        </DescriptionTwo>
        <BottomImgContainer>

        </BottomImgContainer>
        </Content>
      </Wrapper>
      </JencoFan>  
      <ImgWrapperTwo>
      <JencoFanImg src={JencoImg} alt="S&P" />
      </ImgWrapperTwo>      
      </Container>
    </>
  )
}

export default ABOUT_US
