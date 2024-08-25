import React from 'react';
import car_3d_model_1 from "../assets/supra_model.png"; // Supra Mk4
import car_3d_model_2 from "../assets/honda_civic.png"; // Honda Civic
import car_3d_model_3 from "../assets/gtr.png"; // Nissan GTR
import car_3d_model_4 from "../assets/nissan_model.png"; // Nissan 240sx
import car_3d_model_5 from "../assets/supramk5_model.png"; // Supra Mk5

const CarModel = ({ modelId }) => {
    const carModels = {
        1: {
            name: "Supra Mk4",
            image: car_3d_model_1,
            power: "280KM",
            engine: "3.0L",
            drive: "Rear",
            year: "1998"
        },
        2: {
            name: "Honda Civic",
            image: car_3d_model_2,
            power: "330KM",
            engine: "2.0L",
            drive: "4x4",
            year: "2022"
        },
        3: {
            name: "Nissan GTR",
            image: car_3d_model_3,
            power: "565KM",
            engine: "3.8L",
            drive: "4x4",
            year: "2022"
        },
        4: {
            name: "Nissan 240sx",
            image: car_3d_model_4,
            power: "155KM",
            engine: "2.0L",
            drive: "Rear",
            year: "1998"
        },
        5: {
            name: "Supra Mk5",
            image: car_3d_model_5,
            power: "340KM",
            engine: "3.0L",
            drive: "Rear",
            year: "2019"
        },
    };

    return carModels[modelId];
};

export default CarModel;
