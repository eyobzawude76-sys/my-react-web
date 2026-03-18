import './App.css'
import Home from './Home'
import About from './About'
import Contant from './Contant'
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {Navbar,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
return(




<Router>
   
<div className='App'> 
<Navbar  bg="danger" variante="danger" expand="lg" fixed='top' className='shadow-sm'>
  <Container>
    <Navbar.Brand   as={Link} href="/" className='fw-bold fs-4' style={{color:"white"}}> Eyob's Website   </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0'/>
    
<Navbar.Collapse id="basic-navbar-nav"  > 
<Nav className="ms-auto">
<Nav.Link as={Link} to="/" className='nav-Link-custom px-3' style={{color:"white"}}>Home</Nav.Link>
<Nav.Link as={Link} to="/About" className='nav-Link-custom px-3' style={{color:'white'}}>About</Nav.Link>
<Nav.Link as={Link} to="/Contant" className='nav-Link-custom px-3' style={{color:"white"}}>Contact</Nav.Link>

</Nav>
</Navbar.Collapse></Container></Navbar>
<div className='page-content'>
<Container >
<Routes> 
<Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contant'element={<Contant/>}/>
 </Routes></Container> </div> </div>
 </Router>
 )}  
export default App
