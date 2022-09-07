import React from "react";

import Header from "./Header/Header";
import Footer from "../Footer/Footer";

import { SPage } from "./styles";
import { FooterData } from "../../pages/Data/HomeData";



const Layout = ({ children }) => {
    return (
        <>
           <Header/>
          
            <SPage> {children}</SPage>
            <Footer {...FooterData}/>
        </>
    );
};

export default Layout;