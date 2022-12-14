import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../index.css";
import { useNavigate } from "react-router-dom";




const Login= ({setUser})=>{

  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0;
      }
      
      
      function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_address: email, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => setUser(user));
            history("/");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
        
      }

      return (
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!validateForm()}>
            {isLoading ? "Loading..." : "Login"}
            
          </Button>
          {errors?.map((err) => (
          <Alert key={err}>{err}</Alert>
        ))}
        </Form>
      );

}



export default Login;