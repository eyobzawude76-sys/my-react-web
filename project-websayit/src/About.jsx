import React, { useEffect } from "react";
import {Container,Card,Row,Col} from "react-bootstrap";
function About(){useEffect(()=>{
    document.body.style.backgroundColor="light"
return()=>{    document.body.style.backgroundColor=null
}},[]);
return(  <Container> 
    <Row className="justify-content-center">
        <Col ax={12} md={8}>
    <Card className="p-4 shadow">
    <div > <h1 className="text-center-mb-4"> Eyob</h1>
     <p>
        Hello! I am Eyob,apassionate fronted Developer with experience in React,
        Bootstrap,html,CSS and javascript.
        I build responsive and modern websites that help businesses succeed online
        <ul>
          <h3> I can create</h3> 
            <li>Londing pages</li>
              <li>portfolio websites</li>
                <li>small business</li>
                  <li>promo pages</li>
        </ul>
        fast delivery and professional design guaranteed.let's bring your ideas to life!
     </p>
   
    </div></Card></Col></Row></Container>)}
export default About;