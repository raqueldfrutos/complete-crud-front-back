
import { useEffect, useState } from 'react';
import carService from '../services/car.service'


function HomePage() {
    const [cars, setCars] = useState([])

    const getCars = async () => {
        debugger;
        try {
            const res = await carService.getAll()
            setCars(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCars()
    }, [])
    const renderCars = () => {
        return (
            cars.map((car) => <p>{car.name}</p>)
        )
    }

    return (
        <div className="App">
<p>hola</p>
            {renderCars()}

        </div>
    );
}

export default HomePage;