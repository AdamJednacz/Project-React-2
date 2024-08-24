import React, {lazy} from 'react';
import video_desktop from "../assets/bg-animated1.mp4"

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
            <div className="bg">
                <video className="video_desktop" src={video_desktop} autoPlay loop muted/>

                <Header/>
                <Main/>
            </div>
            <div className="bg_rental">
            <Rental/>
            </div>
            <div className="bg_opinions">
            <Opinions/>
            </div>
            <AboutUs/>
            <Form/>
            <Garage/>
            <Footer/>
        </>
    );
};

export default Layout;