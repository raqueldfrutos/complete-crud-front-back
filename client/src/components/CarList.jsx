import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; 

function CarList({ _id, name, brand, engine, color }) {
    return (
        <Container>
        <Card style={{ width: '18rem',  }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{brand}</Card.Subtitle>
                <Link to={`/${_id}`}> See details</Link>
            </Card.Body>
        </Card>
        </Container>
    )
}

export default CarList;