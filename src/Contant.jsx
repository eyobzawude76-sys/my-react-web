import React from "react";
import {Container,Card,Row,Col} from "react-bootstrap";
import './Contant.css'
function Contant(){

return(<Container className="py-5"> <Row className="justify-content-center">
        <Col ax={12} md={8}>
    
        <h1 id="text-center mb-4">Contact me</h1> <br />
        <Card className="p-4 shadow">
         <div>
       <h5>Phone numbers:<strong>0945222203</strong></h5>
        <h5>feacbook:<strong>Eyob</strong></h5>
       
          <h5>insatgram: <strong>EYOB</strong></h5>
           <h5>whatsapp :<strong>abboyi eyob</strong></h5>
        </div>
        </Card>
    </Col></Row>  
    </Container>
)}
export default Contant;