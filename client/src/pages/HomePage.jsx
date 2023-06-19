
import { useEffect, useState } from 'react';
import carService from '../services/car.service'
import CarList from '../components/CarList'


function HomePage() {
    const [cars, setCars] = useState([])

    const getCars = async () => {
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
            cars.map((car) => <div key={car._id}><CarList {...car}/></div>)
        )
    }

    return (
        <div className="App">
            {renderCars()}

        </div>
    );
}

export default HomePage;