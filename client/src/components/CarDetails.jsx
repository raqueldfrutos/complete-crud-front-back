import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import carService from "../services/car.service";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function CarDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const {name, brand, engine, color} = car;

  const getCarDetails = async () => {
    try {
      const res = await carService.getOne(id);
      setCar(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, [id]);

  console.log(car);

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await carService.update(id, car);
      getCarDetails();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>{name}'s Details</h1>
          <h2>Brand: {brand}</h2>
          <p>Engine: {engine}</p>
          <p>Color: {color}</p>
          <Button className="button" onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Col>
        <Col>
          {isEditing ? (
            <Container>
              <Form as="form" onSubmit={handleEdit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBrand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    name="brand"
                    value={brand}
                    placeholder="Brand"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formColor">
                  <Form.Label>Color</Form.Label>
                  <Form.Control
                    name="color"
                    value={color}
                    placeholder="Color"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  name="engine"
                  value={engine}
                  onChange={handleChange}
                >
                  <option value="Hybrid">Hybrid</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </Form.Select>
                <Button className="button" type="submit">
                  Edit
                </Button>
              </Form>
            </Container>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

export default CarDetails;
