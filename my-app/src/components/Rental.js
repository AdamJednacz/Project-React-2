import React from 'react';
import break1 from "../assets/break.png"
import motor from  "../assets/motor.png"
import tools from "../assets/tools.png"
import wheel from "../assets/wheel.png"
import left from  "../assets/left_arrow.png"
import right  from  "../assets/right_arrow.png"
import cart from "../assets/cart.png"
import car from "../assets/3d_car_1.png"
const Rental = () => {
    return (
        <section className="rental">
            <div className="container">
                <div className="slider">
                    <img src={left} alt="left arrow"/>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <img src={right} alt="right arrow"/>
                </div>
                <div className="text">
                    <h1>Car Name*</h1>
                    <div className="specification">
                      <div className="specification_item">
                          <img src={tools} alt="tools"/>
                          <p>Power:135-140KM</p>
                      </div>
                        <div className="specification_item">
                            <img src={wheel} alt="wheel"/>
                            <p>Drive:Rear wheel</p>
                        </div>
                        <div className="specification_item">
                            <img src={motor} alt="motor"/>
                            <p>Motor:1.8L Turbo</p>
                        </div>
                        <div className="specification_item">
                            <img src={break1} alt="break"/>
                            <p>Year:1984</p>
                        </div>
                    </div>
                </div>
                <div className="availability">
                    <h2>Check availability of this car</h2>
                    <div className="availability_slider">
                        <img src={left} alt="left arrow"/>
                            <div className="availability_slide">Days</div>
                            <div className="availability_slide">Hours</div>
                        <img src={right} alt="right arrow"/>
                    </div>
                    <form>
                        <input placeholder="date of receipt"/>
                        <input placeholder="return date"/>
                    </form>

                    <div className="result">
                        <p>360 PLN / for a day</p>
                        <div className="result_box">
                        <img className="cart" src={cart} alt="cart"/>
                        <div className="result_box_amount">pole</div>
                        </div>
                    </div>
                    <a>Here you can check full specification</a>
                </div>
                <img className="car" src={car} alt="car"/>
            </div>

        </section>
    );
};

export default Rental;