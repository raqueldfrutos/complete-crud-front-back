const Car = require("../models/Car.model")

module.exports.list = async (req, res, next) => {
    try {
        const cars = await Car.find();
        return res.status(200).json(cars)
    } catch (error) {
        next(error)
    }
}

module.exports.detail = async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await Car.findById(id)
        return res.status(200).json(car)
    } catch (error) {
        next(error)
    }
}

module.exports.create = async (req, res, next) => {
    try {
        if (!req.body.name) return res.status(400).json({ message: "Bad request" });
        const car = await Car.create(req.body)
        return res.status(201).json(car)
    } catch (error) {
        next(error)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await Car.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(car)
    } catch (error) {
        next(error)
    }
}

module.exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params
        await Car.findByIdAndDelete(id);
        return res.status(200).json({ message: `Card ${id} succesfully deleted` })
    } catch (error) {
        next(error)
    }
}
