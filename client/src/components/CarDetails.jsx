function CarDetails ({ name, brand, engine, color }) {
    return (
        <div>

        <h1>{name}'s Details</h1>
        <h2>Brand: {brand}</h2>
        <p>Engine: {engine}</p>
        <p>Color: {color}</p>
        </div>
    )
}

export default CarDetails;