import React from 'react'
import './style';
import { SidebarContainer, SideBarLinks, MobileImage, ImgWrapper, LabelTitle, Title, TitleDesktop } from './style';

const SideBar = ({Links}) => {
  return (
   
<SidebarContainer>
{Links.map(({ label, link, Image } , index) => {
  return (
    <><SideBarLinks
      key={index}
      to={link}
      
    >
      <TitleDesktop>{label}</TitleDesktop>
    
    <LabelTitle>
      <ImgWrapper>
        <MobileImage src={Image} />
      </ImgWrapper>
      <Title>{label}</Title>
      </LabelTitle>
    
    </SideBarLinks>

    </>
    
)

})}

</SidebarContainer>


  );
};


SideBar.defaultProps = {
  Links: [
    {
      label: "Ceiling & Cabinet",
      link: "/Ceiling-Cabinet-Fans",
      Image: "https://solerpalau-usa.com/images/products/categories/Ceiling_Cabinet_Fans.webp",
      tree: null,
    },
    {
      label: "Centrifugal Filtered Supply",
      link: "/Centrifugal-Filtered-Supply-Fans",
      Image: "https://solerpalau-usa.com/images/products/categories/Centrifugal_Filtered_Supply_Fans.webp",
      tree: null,
  },
  {
    label: "Centrifugal Roof & Wall",
    link: "/Centrifugal-Roof-Wall-Fans",
    Image: "https://solerpalau-usa.com/images/products/categories/Centrifugal_Roof_Wall_Fans.webp",
    tree: null,
},
  {
    label: "Energy Recovery Ventilators",
    link: "/Energy-Recovery-Ventilators",
    Image: "https://solerpalau-usa.com/images/products/categories/Energy_Recovery_Ventilators.webp",
    tree: null,
},
{
    label: "Gravity Vents",
    link: "/Gravity-Vents",
    Image: "https://solerpalau-usa.com/images/products/categories/Gravity_Vents.webp",
    tree: null,
},
{
    label: "High Volume Low Speed Fans",
    link: "/High-Volume-Low-Speed-Fans",
    Image: "https://solerpalau-usa.com/images/products/categories/hvls.png",
  tree: null,
},
{
    label: "In-line/Sidewall Duct Fans",
    link: "/In-line-and-Sidewall-Duct-Fans",
    Image: "https://solerpalau-usa.com/images/products/categories/In-line_Sidewall%20Duct%20Fans.webp",
    tree: null,
},
{
    label: "Jet Fans",
    link: "/Jet-Fans",
    Image: "https://solerpalau-usa.com/images/products/categories/Jet_Fans.webp",
    tree: null,
},
{
    label: "Kitchen Hoods",
    link: "/Kitchen-Hoods",
    Image: "https://solerpalau-usa.com/images/products/categories/KitchenHoodsTwo.webp",
    tree: null,
},
{
    label: "Outside Air Motorized Damper Kit",
    link: "/Outside-Air-Motorized-Damper-Kit",
    Image: "https://solerpalau-usa.com/images/products/categories/Outside_Air_Motorized_Damper_Kits.webp",
    tree: null,
},
{
    label: "Premium CHOICE",
    link: "/Premium-Choice",
    Image: "https://solerpalau-usa.com/images/products/categories/Premium_CHOICE_Series.webp",
    tree: null,
},
{
    label: "reFresh Series",
    link: "/reFresh",
    Image: "https://solerpalau-usa.com/images/products/categories/reFresh_Series.webp",
    tree: null,
},
{
    label: "Roof Propeller Fans",
    link: "/Roof-Propeller-Fans",
    Image: "https://solerpalau-usa.com/images/products/categories/Roof_Propeller_Fans.webp",
    tree: null,
},
{
    label: "Sidewall Propeller Fans",
    link: "/Sidewall-Propeller-Fans",
    Image: "https://solerpalau-usa.com/images/products/categories/Sidewall_Propeller_Fans.webp",
    tree: null,
},
{
    label: "Tubeaxial Fans",
    link: "/Tubeaxial-Fans",
    Image: "https://solerpalau-usa.com/images/products/categories/Tubeaxial_Fans.webp",
    tree: null,
},
{
    label: "Utility Vent Sets",
    link: "/Utility-Vent-Sets",
    Image: "https://solerpalau-usa.com/images/products/categories/Utility_Vent_Sets.webp",
    tree: null,
},

  ],
}



export default SideBar
