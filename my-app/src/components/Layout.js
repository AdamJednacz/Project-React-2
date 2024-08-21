import React, {lazy} from 'react';
const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const Main = lazy(() => import("./Main"));
const Rental = lazy(() => import("./Rental"));
const AboutUs = lazy(() => import("./AboutUs"));
const Opinions = lazy(() => import("./Opinions"));
const Form = lazy(() => import("./Form"));
const Garage = lazy(() => import("./Garage"));
const Layout = () => {
    return (
        <>
         <Header/>
         <Main/>
         <Rental/>
         <AboutUs/>
         <Opinions/>
         <Form/>
         <Garage/>
         <Footer/>
        </>
    );
};

export default Layout;