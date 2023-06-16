const { Schema, model } = require("mongoose");

const carSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        brand: String,
        engine: {
            type: String,
            enum: ["Hybrid", "Automatic", "Manual"],
            default: "Manual"
        },
        color: String,
    },
    {
        timestamps: true
    }
)

const Car = model("Car", carSchema);
module.exports = Car;