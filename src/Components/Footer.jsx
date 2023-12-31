import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div>
        <Row className='footer pt-5'>

            <Col lg={4}>
                <h2 className='text-light ms-5'>Corporate Information</h2>
                
                <div className='d-flex flex-column ms-5 mt-4'>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>                  
                </div>
                <div className='d-flex justify-content-evenly align-items-center ms-5 mt-5 pb-5'>
                    <div><span style={{color:'yellowgreen', fontSize:'40px'}}><i class="fa-regular fa-envelope fa-lg"></i></span></div>
                    <div><h5 className='text-light'>Sign Up for NVIDIA News</h5></div>
                    <div><button style={{backgroundColor:'greenyellow', padding:'.8rem', fontWeight:'bold'}}>Subscribe</button></div>
                </div>
            </Col>

            <Col lg={4}>
            <h2 className='text-light ms-5'>Corporate Information</h2>
                
                <div className='d-flex flex-column ms-5 mt-4'>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>                  
                </div>
            </Col>

            <Col lg={4}>
            <h2 className='text-light ms-5'>Corporate Information</h2>
                
                <div className='d-flex flex-column ms-5 mt-4'>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>
                    <Link style={{textDecoration:'none', color:'greenyellow'}}>About us</Link>                  
                </div>
                <div className='linkstyle d-flex justify-content-evenly align-items-center mt-5 me-5 pb-5'>
                    <div className='istyle'><h5>Follow NVIDIA</h5></div>
                    <div className='istyle' style={{fontSize:'40px'}}>
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className='istyle' style={{fontSize:'40px'}}>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className='istyle' style={{fontSize:'40px'}}>
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className='istyle' style={{fontSize:'40px'}}>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className='istyle' style={{fontSize:'40px'}}>
                    <i class="fa-brands fa-youtube"></i>
                    </div>                   
                </div>
            </Col>

        </Row>

        <div style={{height:'125px', width:'100%'}}>
            <Container>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img className='mt-3' width='150px' height='50px' src="https://www.logo.wine/a/logo/Nvidia/Nvidia-Horizontal-Black-Logo.wine.svg" alt="" />
                        <div className='d-flex justify-content-start gap-2 mt-2'>
                            <Link style={{textDecoration:'none', color:'black'}}>Privacy policy</Link><p>|</p>
                            <Link style={{textDecoration:'none', color:'black'}}>Privacy policy</Link><p>|</p>
                            <Link style={{textDecoration:'none', color:'black'}}>Privacy policy</Link><p>|</p>
                            <Link style={{textDecoration:'none', color:'black'}}>Privacy policy</Link><p>|</p>
                            <Link style={{textDecoration:'none', color:'black'}}>Privacy policy</Link>
                        </div>
                        <p>Copyright © 2023 NVIDIA Corporation</p>
                    </div>
                    <div className='mt-5'>
                        <Link style={{textDecoration:'none', color:'black'}}>India</Link>
                    </div>
                </div>
            </Container>
        </div>

      

        
    </div>
  )
}

export default Footer