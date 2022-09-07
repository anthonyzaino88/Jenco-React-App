import React from 'react'
import { ButtonCTA, Container, FooterDisc, FooterIcons, Insta, FooterLinks, SlashIcon,FooterLinksContainer, CopyrightSection, FooterTitle, Logo, FooterTitleTop, SectionLeft, SectionRight, FooterLinkRow, Footerbg, Linkedin, NewsletterContainer, SectionNavLinks, FooterLinksBottom} from './styles'

const Footer = ({ TitleOne, DiscCanada, DiscUSA, IconLinkOne, IconLinkThree,
  TitleTwo, Link1, Link2, Link3, Link4, name1, name2, name3, name4, TitleThree, DiscSub, CTA, Copyright1,
  CTADDisc, Copyright2, Footerlogo, PolicyLink, Policyname, WMLink, WMname, SMLink, SMname, 
}) => {
  return (
    <>

<Footerbg>
<Container>
<SectionLeft>
<FooterTitleTop>{TitleOne}</FooterTitleTop>
<FooterDisc>{DiscCanada}</FooterDisc>
<FooterDisc>{DiscUSA}</FooterDisc>
<FooterIcons href={IconLinkOne}><Insta/></FooterIcons>
<FooterIcons href={IconLinkThree}><Linkedin/></FooterIcons>
</SectionLeft>
<SectionNavLinks>
<FooterTitle>{TitleTwo}</FooterTitle>
<FooterLinksContainer>
<FooterLinks to={{pathname: Link1}}>{name1}</FooterLinks>
<FooterLinks to={{pathname: Link2}}>{name2}</FooterLinks>
<FooterLinks to={{pathname: Link3}}>{name3}</FooterLinks>
<FooterLinks to={{pathname: Link4}}>{name4}</FooterLinks>

</FooterLinksContainer>
</SectionNavLinks>
<NewsletterContainer>
<FooterTitle>{TitleThree}</FooterTitle>
<FooterDisc>{DiscSub}</FooterDisc>
<ButtonCTA href={CTA}>{CTADDisc}</ButtonCTA>
</NewsletterContainer>
<CopyrightSection>
<FooterDisc>{Copyright1}</FooterDisc>
<FooterDisc>{Copyright2}</FooterDisc>
</CopyrightSection>

<FooterLinkRow>
<FooterLinksBottom to={{pathname: PolicyLink}}>{Policyname}</FooterLinksBottom>
<SlashIcon/>
<FooterLinksBottom to={{pathname: WMLink}}>{WMname}</FooterLinksBottom>
<SlashIcon/>
<FooterLinksBottom to={{pathname: SMLink}}>{SMname}</FooterLinksBottom>
</FooterLinkRow>

<SectionRight>
<Logo src={Footerlogo} alt='logo'/>
</SectionRight>
</Container>
</Footerbg>
</>
  )
}

export default Footer
