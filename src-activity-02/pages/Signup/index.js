import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  
  const [name, setName] = useState();
  const [pwd, setPwd]  = useState();
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log("name is " + name);
    console.log("name is " + pwd;
  };


  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input 
              className="form-control" 
              type="text" 
              placeholder="Username" 
              name="username"
              onChange = {(e) => setName(e.target.value)} />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange = {(e) => setPwd(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit"  >
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello NAME_HERE!</h3>
          <p>I probably shouldn't tell you this, but your password is PASSWORD_HERE}!</p>
        </Container>
        
      
      </form>
    </div>
  );
};

export default Signup;
