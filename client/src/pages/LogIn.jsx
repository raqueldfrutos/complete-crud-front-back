import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";

function LogIn() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { authenticate, storeToken, error } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    authService
      .login(loginData)
      .then(({ data }) => {
        console.log(data);
        storeToken(data.authToken);
        authenticate();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const { password, email } = loginData;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
          Log In
        </Button>
      </Form>
    </Container>
  );
}

export default LogIn;
