const { Car } = require("../models");

const createCar = async (req, res) => {
    // Destructuring object
    const { name, rentPerDay, capacity, image } = req.body;

    try {
        const newCar = await Car.create({
            name,
            rentPerDay,
            capacity,
            image
        });

        res.status(200).json({
            status: "success",
            data: {
                newCar
            }
        });
    } catch (err) {
        console.error(err.message); // Log the error message to console for debugging
        res.status(500).json({
            status: "error",
            message: "Failed to create car"
        });
    }
};

const getCars = async (req, res) => {
    try {
        const cars = await Car.find();

        res.status(200).json({
            status: "success",
            data: {
                cars
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch cars"
        });
    }
};

const updateCar = async (req, res) => {
    const carId = req.params.id;
    const { name, rentPerDay, capacity, image } = req.body;

    try {
        const updatedCar = await Car.findByIdAndUpdate(carId, {
            name,
            rentPerDay,
            capacity,
            image
        }, { new: true });

        res.status(200).json({
            status: "success",
            data: {
                updatedCar
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: "error",
            message: "Failed to update car"
        });
    }
};

const deleteCar = async (req, res) => {
    const carId = req.params.id;

    try {
        await Car.findByIdAndDelete(carId);

        res.status(200).json({
            status: "success",
            message: "Car deleted successfully"
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: "error",
            message: "Failed to delete car"
        });
    }
};


module.exports = {
    createCar,
    getCars,
    updateCar,
    deleteCar
};
