import { useState } from 'react'
import carService from '../services/car.service'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function CarDetails({ _id, name, brand, engine, color, getCarDetails }) {
  const [isEditing, setIsEditing] = useState(false)
  const [carUpdated, setCarUpdated] = useState({
    name,
    brand,
    engine,
    color
  })

  const handleChange = e => {
    setCarUpdated({
      [e.targe.name]: e.target.value
    })
  }

  const handleEdit = async e => {
    e.preventDefault()
    try {
      await carService.update(_id, carUpdated)
      getCarDetails()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>{name}'s Details</h1>
          <h2>Brand: {brand}</h2>
          <p>Engine: {engine}</p>
          <p>Color: {color}</p>
          <Button className='button' onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Col>
        <Col>
          {isEditing ? (
            <Container>
              <Form as='form' onSubmit={handleEdit}>
                <Form.Group className='mb-3' controlId='formName'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name='name'
                    value={carUpdated.name}
                    placeholder='Name'
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBrand'>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    name='brand'
                    value={carUpdated.brand}
                    placeholder='Brand'
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formColor'>
                  <Form.Label>Color</Form.Label>
                  <Form.Control
                    name='color'
                    value={carUpdated.color}
                    placeholder='Color'
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Select
                  aria-label='Default select example'
                  name='engine'
                  value={carUpdated.engine}
                  onChange={handleChange}
                >
                  <option value='Hybrid'>Hybrid</option>
                  <option value='Automatic'>Automatic</option>
                  <option value='Manual'>Manual</option>
                </Form.Select>
                <Button className='button' type='submit'>
                  Edit
                </Button>
              </Form>
            </Container>
          ) : null}
        </Col>
      </Row>
    </Container>
  )
}

export default CarDetails
