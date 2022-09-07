import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from '../../../app/slice/uiSlice';
import { ImgContainer, MobileLogo, SearchContainer, SHeader, SHeaderFixed, SMenu, SHeaderHeight, SImg, SLogoLink, SubButton, SearchBox, SCloseIcon, SMenuToggleButton, MenuIcon, SearchInput, MobileTitle, NavContainer, TopHeader, TopHeaderLeft, TopHeaderRight, SearchIcon, PhoneIcon, PhoneIconContainer, SubButtonContainer } from './style'
import Logo from '../../../assests/img/sp-logo.webp';
import Nav from './Nav/Nav';

const Header = () => {

    const dispatch = useDispatch();
    const { menuOpen } = useSelector((state) => state.ui);

    const menuToggleHandler = () => {
        dispatch(uiActions.menuToggle());
    };
    const menuCloseHandler = () => {
        if (menuOpen) dispatch(uiActions.menuClose());
    };
   



  return (
    <>
      <SHeaderHeight/>
    
      <SHeaderFixed>
      <TopHeader>
        
        <TopHeaderRight>
    
       
        </TopHeaderRight>
      </TopHeader>
      <SHeader>
      <ImgContainer>
      <SLogoLink to="/" onClick={menuCloseHandler}>
        <SImg src='https://jencofan.com/images/logo/jencofan-logo.png' alt='header-img'/>
        <MobileLogo src={Logo}/>
        </SLogoLink>
        </ImgContainer>

        <NavContainer>
        <Nav />
     
       <SearchBox></SearchBox>
       <SubButtonContainer>
       <SearchIcon/>
       </SubButtonContainer>
       <SearchContainer/>
        </NavContainer>
      
       <MobileTitle>JencoFan</MobileTitle>
        <SearchContainer>
       
        <SubButton>SUBSCRIBE</SubButton>
        
           <SMenuToggleButton onClick={menuToggleHandler}>
                            {!menuOpen ? <MenuIcon /> : <SCloseIcon />}
                        </SMenuToggleButton>
        </SearchContainer>
       
        </SHeader>
        </SHeaderFixed>
        <SMenu style={menuOpen ? { left: 0 } : {}}>
                <Nav menuToggleHandler={menuToggleHandler} />
            </SMenu>
    </>
  )
}

export default Header;
