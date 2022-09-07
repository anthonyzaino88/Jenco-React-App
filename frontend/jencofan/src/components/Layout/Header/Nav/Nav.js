import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import {
    SArrowContainer,
    SArrowIcon,
    SNav,
    SNavLabel,
    SNavLabelContainer,
    SNavLink,
    SNavLinkContainer,
} from "./styles";

const Nav = ({ navLinks, menuToggleHandler }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const openDropdownHandler = (label) => {
        if (label === openDropdown) return setOpenDropdown(null);
        setOpenDropdown(label);
    };

    const onSelectCallback = () => {
        if (menuToggleHandler) menuToggleHandler();
        setOpenDropdown(null);
    };

    return (
        <SNav>
            {navLinks.map(({ label, link, tree }, index) => {
                const isOpen = openDropdown === label;
                return (
                    <SNavLinkContainer key={index}>
                        {link && <SNavLink to={link}>{label}</SNavLink>}
                        {!link && (
                            <SNavLabelContainer onClick={() => openDropdownHandler(label)}>
                                <SNavLabel isOpen={isOpen}>{label}</SNavLabel>
                                <SArrowContainer isOpen={isOpen}>
                                    <SArrowIcon />
                                </SArrowContainer>
                            </SNavLabelContainer>
                        )}
                        {isOpen && <Dropdown tree={tree} onSelectCallback={onSelectCallback} />}
                    </SNavLinkContainer>
                );
            })}
        </SNav>
    );
};

Nav.defaultProps = {
    navLinks: [
        {
            label: "Company",
            link: null,
            tree: [
                {
                    label: "About Us",
                    link: "/about-us",
                    branches: null,
                },
                {
                    label: "Careers",
                    link: "/Careers",
                    branches: null,
                },
                {
                    label: "Contact Us",
                    link: "/contact-us",
                    branches: null,
                },
                
               
            ],
        },
       
        {
         
            label: "Products",
            link:  null,
            tree: [
                {
                    label: "All Products",
                    link: "/products",
                    branches: null,
                },

                        {
                            label: "Ceiling & Cabinet Fans",
                            link: "/Ceiling-Cabinet-Fans",
                            branches: null,
                        },
                        {
                            label: "Centrifugal Filtered Supply Fans",
                            link: "/Centrifugal-Filtered-Supply-Fans",
                            branches: null,
                        },
                        {
                            label: "Centrifugal Roof & Wall Fans",
                            link: "/Centrifugal-Roof-Wall-Fans",
                            branches: null,
                        },
                      
                        {
                            label: "Energy Recovery Ventilators by S&P",
                            link: "/Energy-Recovery-Ventilators",
                            branches: null,
                        },
                        {
                            label: "Gravity Vents",
                            link: "/Gravity-Vents",
                            branches: null,
                        },
                        {
                            label: "High Volume Low Speed Fans",
                            link: "/High-Volume-Low-Speed-Fans",
                            branches: null,
                        },
                        {
                            label: "In-line/Sidewall Duct Fans",
                            link: "/In-line-and-Sidewall-Duct-Fans",
                            branches: null,
                        },
                        {
                            label: "Jet Fans",
                            link: "/Jet-Fans",
                            branches: null,
                        },
                        {
                            label: "Kitchen Hoods",
                            link: "/Kitchen-Hoods",
                            branches: null,
                        },
                        {
                            label: "Outside Air Motorized Damper Kit",
                            link: "/Outside-Air-Motorized-Damper-Kit",
                            branches: null,
                        },
                        {
                            label: "Premium CHOICE Series by S&P",
                            link: "/Premium-Choice",
                            branches: null,
                        },
                        {
                            label: "reFresh Series by S&P",
                            link: "/reFresh",
                            branches: null,
                        },
                        {
                            label: "Roof Propeller Fans",
                            link: "/Roof-Propeller-Fans",
                            branches: null,
                        },
                        {
                            label: "Sidewall Propeller Fans",
                            link: "/Sidewall-Propeller-Fans",
                            branches: null,
                        },
                        {
                            label: "Tubeaxial Fans",
                            link: "/Tubeaxial-Fans",
                            branches: null,
                        },
                        {
                            label: "Utility Vent Sets",
                            link: "/Utility-Vent-Sets",
                            branches: null,
                        },
                        
                    ],
        },

        {
            label: "Newsroom",
            link: "/Newsroom",
            tree: null,
        },

        {
            label: "Resources",
            link: null,
            tree: [
                {
                    label: "Competitive Cross Reference",
                    link: "/Competitive-Cross-Reference",
                    branches: null,
                },
                {
                    label: "Literature & Documentation",
                    link: "/Literature-Documentation",
                    branches: null,
                },
                {
                    label: "Code Solutions",
                    link: null,
                    branches: [
                        {
                            label: "Ecowatt",
                            link: "https://www.ecowatt-usa.com/",
                            branches: null,
                        },
                        {
                            label: "Outside Air Solutions",
                            link: "/Outside-Air-Solutions",
                            branches: null,
                        },
                        {
                            label: "ICC Code Solutions",
                            link: "/ICC-Code-Solutions",
                            branches: null,
                        },
                    ],
                },

                {
                    label: "Revit Content",
                    link: "/Revit-Content",
                    branches: null,
                },
                {
                    label: "Product Returns",
                    link: "https://solerpalau-usa.com/resources/returns.html",
                    branches: null,
                },
                {
                    label: "White Papers",
                    link: "/White-papers",
                    branches: null,
                },
                

              


            ],
        },
       
    ],
};

export default Nav;