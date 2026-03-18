import React from "react";
import {Container,Card,Row,Col} from "react-bootstrap";
import './Contant.css'
function Contant(){

return(<Container className="py-5"> <Row className="justify-content-center">
        <Col ax={22} md={16}>
    
        <h1 id="text-center mb-4">Contact me</h1> 
        <Card className="p-4 shadow">
         <div>
       <h4> <a href=" https://imo.onelink.me/7QOL/iso">Imo</a></h4>
     <h4><a href="https://www.facebook.com/profile.php?id=61583157015997">Facebook</a></h4> 
                <h5><a href="https://wa.me/qr/DPYUDECXDQKO1">WhatsAPP</a></h5>
           
        </div>
        </Card>
    </Col></Row>  
    </Container>
)}
export default Contant;