import React from 'react';
import arrow from "../assets/arrow.png";
import person from "../assets/person.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"
import star from "../assets/star.png"
const Opinions = () => {
    return (
        <section className="opinions">
            <div className="container">
                <h1>What people and clients
                    <span> think</span> about us.</h1>
                <div className="line"></div>
                <div className="opinions_container">
                    <div className="opinion">
                        <img className="person" src={person} alt="person"/>
                        <div className="opinion_content">
                            <div className="opinion_text">
                            <p>Budda</p>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                            </div>
                            <div className="opinion_box">
                                Fajne auta w cenie
                            </div>
                        </div>
                    </div>
                    <div className="opinion">
                        <img className="person" src={person2} alt="person"/>
                        <div className="opinion_content">
                            <div className="opinion_text">
                                <p>Gimper</p>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                            </div>
                            <div className="opinion_box">
                               Polecam!!!
                            </div>
                        </div>
                    </div>
                    <div className="opinion">
                        <img className="person" src={person3} alt="person"/>
                        <div className="opinion_content">
                            <div className="opinion_text">
                                <p>Godboi</p>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                                <img className="star" src={star} alt="star"/>
                            </div>
                            <div className="opinion_box">
                                Bardzo przyjemna obsługa
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="arrow_bg">
                <img src={arrow} alt="arrow"/>
            </div>
        </section>
    );
};

export default Opinions;