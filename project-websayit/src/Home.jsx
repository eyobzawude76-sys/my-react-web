import React,{ useEffect, useRef, useState } from "react";
import{Container,Form,Button,Row,Col,Card} from "react-bootstrap";
function Home(){
const inputusref=useRef(null)
const[title,settitel]=useState("");
const[Lname,setLname]=useState("");
const[email,setemail]=useState("");
const[pasworde,setpasworde]=useState("");
useEffect(()=>{ inputusref.current.focus();},[])
const submit=(e)=>{ e.preventDefault();fetch('',{method:'POST',
body:JSON.stringify({body:'',title:'',usrId:'1'}),
Headers:{'content-type':'',}})
.then(res=>{res.json();console.log("Response Dufera",res);})
.then(data=>{console.log("datan debee:",data),alert('galmoftertaa');console.log('Error')})
.catch((Error)=>{ console.log('res.data')})};
return( <Container className="text-center py-5"><div className="text-center mb-5"> 
<img src="eyob123.jpg" alt="eyob" className="img-fluid rounded-circle mb-3" style={{width:"200px",height:"200px"
  ,objectFit:"cover"
}}/>
    <h1 className="display-4">Wel come to Eyob websyite</h1>
  <p className="lead"> Bulding profetional wep appilcation</p>
    <Button variant="primary"size="lg"> get startred</Button>
    </div><Row className="justify-content-center mb-5"><Col  ax={12}  md={6}>  <Card className="p-4 shadow">

     <h2 className="text-center-mb-4"> sign up</h2><Form onSubmit={submit}>
 <Form.Group className="mb-3"><Form.Label>Name</Form.Label>
 <Form.Control ref={inputusref} type="text" value={title} onChange={(e)=>settitel(e.target.value)}/>
</Form.Group><Form.Group className="mb-3"><Form.Label>Lname</Form.Label>
 <Form.Control type="text" value={Lname} onChange={(e)=>setLname(e.target.value)}/>
</Form.Group><Form.Group className="mb-3">  <Form.Label>Emali</Form.Label>
 <Form.Control type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
</Form.Group><Form.Group className="mb-3"> <Form.Label>pasworde</Form.Label>
 <Form.Control  type="text" value={pasworde} onChange={(e)=>setpasworde(e.target.value)}/>
</Form.Group>
<Button variant="primary" type="submit" className="w-100"> SUbmit</Button></Form>
       </Card></Col></Row></Container>)}
export default Home;