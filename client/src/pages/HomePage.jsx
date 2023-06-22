import axios from "axios";
import { useEffect, useState } from 'react';
import carService from '../services/car.service'
import CarList from '../components/CarList'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";


function HomePage() {
    const [cars, setCars] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [newCar, setNewCar] = useState({
        name: "",
        brand: "",
        engine: "",
        color: ""
    })


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


    const deleteCar = async (id) => {
        try {
            await carService.delete(id);
            getCars();
        } catch (error) {
            console.log(error)
        }
    }

    const renderCars = () => {
        return (
            cars.map((car) => <div key={car._id}><CarList {...car} deleteCar={deleteCar} /></div>)
        )
    }

    const handleChange = (e) => {
        setNewCar({
            ...newCar,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await carService.create(newCar)
            getCars();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Button className="button" onClick={() => setShowForm(!showForm)}>Create new car</Button>
            <Row>
                <Col>{renderCars()}</Col>
                <Col>
                    {
                        showForm ?
                            <Container>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name="name" value={newCar.name} placeholder="Name" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBrand">
                                        <Form.Label>Brand</Form.Label>
                                        <Form.Control name="brand" value={newCar.brand} placeholder="Brand" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formColor">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control name="color" value={newCar.color} placeholder="Color" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Select aria-label="Default select example" name="engine" value={newCar.engine} onChange={handleChange}>
                                        <option value='Hybrid'>Hybrid</option>
                                        <option value='Automatic'>Automatic</option>
                                        <option value='Manual'>Manual</option>
                                    </Form.Select>
                                    <Button className="button" type="submit">Create</Button>
                                </Form>
                            </Container>
                            : null
                    }

                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;