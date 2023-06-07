import React, { useRef, useState } from "react";
import alertify from "alertifyjs";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Register.css";

const Register = () => {
    const nameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleRegistration = (e) => {
        const name = nameRef.current.value;
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        const newUser = {name, username, email, password};
        fetch("http://localhost:5000/register", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Registered!");
                e.target.reset();
            });

        e.preventDefault();
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <Form onSubmit={handleRegistration}>
                <Row className="mb-3">
                    <Col>
                        <Form.Control
                            ref={nameRef}
                            placeholder="Name"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            ref={usernameRef}
                            placeholder="Username"
                        />
                    </Col>
                </Row>
                <Form.Control
                    ref={emailRef}
                    className="mb-3"
                    type="email"
                    placeholder="Email"
                />
                <Form.Control
                    ref={passwordRef}
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
