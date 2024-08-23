import React, { useState } from 'react';
import break1 from "../assets/break.png";
import motor from  "../assets/motor.png";
import tools from "../assets/tools.png";
import wheel from "../assets/wheel.png";
import left from  "../assets/left_arrow.png";
import right  from  "../assets/right_arrow.png";
import cart from "../assets/cart.png";
import car from "../assets/3d_car_1.png";

const slides = [
    { id: 1, content: <p>1</p> },
    { id: 2, content: <p>2</p>},
    { id: 3, content: <p>3</p> },
    { id: 4, content: <p>4</p> },
    { id: 5, content: <p>5</p> }
];

const availabilitySlides = [
    { id: 1, content: <p>Days</p> },
    { id: 2, content: <p>Hours</p> },
];

const Rental = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentAvailabilitySlide, setCurrentAvailabilitySlide] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndex);
    };

    const goToPreviousAvailability = () => {
        const isFirstSlide = currentAvailabilitySlide === 0;
        const newIndex = isFirstSlide ? availabilitySlides.length - 1 : currentAvailabilitySlide - 1;
        setCurrentAvailabilitySlide(newIndex);
    };

    const goToNextAvailability = () => {
        const isLastSlide = currentAvailabilitySlide === availabilitySlides.length - 1;
        const newIndex = isLastSlide ? 0 : currentAvailabilitySlide + 1;
        setCurrentAvailabilitySlide(newIndex);
    };

    return (
        <section className="rental">
            <div className="container">
                <div className="slider">
                    <img src={left} alt="left arrow" onClick={goToPrevious}/>
                    <div className="slide">
                        {slides[currentSlide].content}
                    </div>
                    <img src={right} alt="right arrow" onClick={goToNext}/>
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
                        <img src={left} alt="left arrow" onClick={goToPreviousAvailability}/>
                        <div className="availability_slide">
                            {availabilitySlides[currentAvailabilitySlide].content}
                        </div>
                        <img src={right} alt="right arrow" onClick={goToNextAvailability}/>
                    </div>
                    <form>
                        <input type="date" placeholder="date of receipt"/>
                        <input type="date" placeholder="return date"/>
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
