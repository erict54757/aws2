import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Navbar,Form, Nav,FormControl,Card, Row,Col } from 'react-bootstrap';
  const words = ["CICI", "Rusty", "Runty"] 

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  <Row>
  <Col sm="12"md={{ span: 4, offset: 3 }} lg="6" >
  <Card className="mb-4" >
    
  <Card.Img variant="top" src="abby.jpg" />
  
  <Card.Body>
    <Card.Title>Abby Pintens</Card.Title>
    <Card.Text style={{fontSize:"2rem"}}>
      Here's all my Cat's for sale!!
    </Card.Text>
  
  
  </Card.Body>
 
</Card>
</Col>
</Row>

{/* //Cats for sale// */}


<Row>

 
    
    {words.map(item =>  <Col sm="12"md="4" lg="4" >
  <Card >
    
  <Card.Img variant="top" src={item+".jpg"}  style={{height:"300px"}}/>
  
  <Card.Body>
  <Card.Title>{item}</Card.Title>
    <Card.Text style={{fontSize:"2rem"}}>
      Pricing: Let's Talk About It.
    </Card.Text>
  
  
  </Card.Body>
 
</Card>
</Col> )} 
    
  
        
            
      
    


</Row>




  

    </div>
  );
}

export default App;
