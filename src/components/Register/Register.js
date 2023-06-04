import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Register.css";

const Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application.json",
            },
            body: JSON.stringify({
                name,
                username,
                email,
                password,
            }),
        });
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <Form onSubmit={register}>
                <Row className="mb-3">
                    <Col>
                        <Form.Control
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                    </Col>
                </Row>
                <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3"
                    type="email"
                    placeholder="Email"
                />
                <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-3"
                    type="password"
                    placeholder="Password"
                />
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;
