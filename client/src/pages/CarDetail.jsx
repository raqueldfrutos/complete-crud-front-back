import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import carService from '../services/car.service'
import CarDetails from '../components/CarDetails'
import { Container } from "react-bootstrap";

function CarDetail() {
    const { id } = useParams();
    const [car, setCar] = useState([])

    const getCarDetails = async () => {
        try {
            const res = await carService.getOne(id)
            setCar(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
    getCarDetails();
    }, [id])

    return (
       <Container>
        {
            car ? <CarDetails {...car}/> : <p>No hay datos...</p>
        }
       </Container>
    )
}
export default CarDetail;