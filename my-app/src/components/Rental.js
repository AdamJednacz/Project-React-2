import React, { useState } from 'react';
import break1 from "../assets/break.png";
import motor from "../assets/motor.png";
import tools from "../assets/tools.png";
import wheel from "../assets/wheel.png";
import left from "../assets/left_arrow.png";
import right from "../assets/right_arrow.png";
import cart from "../assets/cart.png";
import calendar from "../assets/calendar.png";
import Slider from "./Slider";
import CarModel from "./CarModel";

const availabilitySlides = [
    { id: 1, content: <p>Days</p> },
    { id: 2, content: <p>Hours</p> },
];

const Rental = () => {
    const [currentAvailabilitySlide, setCurrentAvailabilitySlide] = useState(0);
    const [selectedModelId, setSelectedModelId] = useState(1);

    const goToPreviousAvailability = () => {
        setCurrentAvailabilitySlide((prevSlide) => (prevSlide === 0 ? availabilitySlides.length - 1 : prevSlide - 1));
    };

    const goToNextAvailability = () => {
        setCurrentAvailabilitySlide((prevSlide) => (prevSlide === availabilitySlides.length - 1 ? 0 : prevSlide + 1));
    };

    const selectedCar = CarModel({ modelId: selectedModelId });

    return (
        <section id="rental" className="rental">
            <div className="container">
                <Slider onSlideChange={setSelectedModelId} />
                <div className="text">
                    <h1>{selectedCar.name}</h1>
                    <div className="specification">
                        <div className="specification_item">
                            <img src={tools} alt="tools" />
                            <p>Power: {selectedCar.power}</p>
                        </div>
                        <div className="specification_item">
                            <img src={wheel} alt="wheel" />
                            <p>Drive: {selectedCar.drive}</p>
                        </div>
                        <div className="specification_item">
                            <img src={motor} alt="motor" />
                            <p>Engine: {selectedCar.engine}</p>
                        </div>
                        <div className="specification_item">
                            <img src={break1} alt="break" />
                            <p>Year: {selectedCar.year}</p>
                        </div>
                    </div>
                </div>
                <div className="availability">
                    <h2>Check availability of this car</h2>
                    <div className="availability_slider">
                        <img src={left} alt="left arrow" onClick={goToPreviousAvailability} />
                        <div className="availability_slide">
                            {availabilitySlides[currentAvailabilitySlide].content}
                        </div>
                        <img src={right} alt="right arrow" onClick={goToNextAvailability} />
                    </div>
                    <form>
                        <div className="input_container">
                            <input type="date" placeholder="date of receipt" />
                            <img src={calendar} alt="calendar" />
                        </div>
                        <div className="input_container">
                            <input type="date" placeholder="return date" />
                            <img src={calendar} alt="calendar" />
                        </div>
                    </form>
                    <div className="result">
                        <p>360 PLN / for a day</p>
                        <div className="result_box">
                            <img className="cart" src={cart} alt="cart" />
                            <div className="result_box_amount">Total</div>
                        </div>
                    </div>
                    <a href="#">*Here you can check full specification</a>
                </div>
                <img className="car" src={selectedCar.image} alt={selectedCar.name} />
            </div>
        </section>
    );
};

export default Rental;
