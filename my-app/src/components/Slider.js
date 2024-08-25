import React, {useEffect, useState} from 'react';
import left from "../assets/left_arrow.png";
import right from "../assets/right_arrow.png";
import car_3d_model_1 from "../assets/car_3d_model_1.avif"
import car_3d_model_2 from "../assets/car_3d_model_2.jpg"
import car_3d_model_3 from "../assets/car_3d_model_3.jpg"
import car_3d_model_4 from "../assets/car_3d_model_4.jpg"
import car_3d_model_5 from "../assets/car_3d_model_5.jpg"




const Slider = ({ onSlideChange }) => {

    const slides = [
        { id: 1, content: <img className="img" src={car_3d_model_1} alt="3d_model"/> },
        { id: 2, content: <img className="img" src={car_3d_model_2} alt="3d_model"/> },
        { id: 3, content: <img className="img" src={car_3d_model_3} alt="3d_model"/> },
        { id: 4, content: <img className="img" src={car_3d_model_4} alt="3d_model"/> },
        { id: 5, content: <img className="img" src={car_3d_model_5} alt="3d_model"/> },


    ];

    const [currentSlide, setCurrentSlide] = useState(2); // Start from the third slide

    useEffect(() => {
        onSlideChange(slides[currentSlide].id);
    }, [currentSlide]);
    const goToPrevious = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const goToNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const getSlidesToShow = () => {
        const slidesToShow = [];
        const middleIndex = Math.floor(slides.length / 2);

        for (let i = -2; i <= 2; i++) {
            let index = (currentSlide + i + slides.length) % slides.length;
            slidesToShow.push({
                ...slides[index],
                isActive: i === 0,
            });
        }
        return slidesToShow;
    };

    return (
        <div className="slider">
            <img src={left}  alt="left arrow" onClick={goToPrevious} className="arrow" />
            <div className="slides">
                <div className="slides-inner">
                    {getSlidesToShow().map((slide) => (
                        <div
                            className={`slide ${slide.isActive ? 'active' : ''}`}
                            key={slide.id}
                        >
                            {slide.content}
                        </div>
                    ))}
                </div>
            </div>
            <img src={right} alt="right arrow" onClick={goToNext} className="arrow" />
        </div>
    );
};

export default Slider;
