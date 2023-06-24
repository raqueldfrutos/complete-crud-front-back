import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import authService from "../services/auth.service";

function SignUp() {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(signupData);
    e.preventDefault();

    authService
      .signup(signupData)
      .then(({ data }) => navigate("/login"))
      .catch((err) => console.log(err));
  };

  const { username, password, email } = signupData;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            value={username}
            onChange={handleInputChange}
            name="username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleInputChange}
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBrand">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handleInputChange}
            name="password"
          />
        </Form.Group>
        <Button className="button" type="submit">
          Create user
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
