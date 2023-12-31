import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home1() {
  return (
    <div style={{backgroundColor:'black', color:'white', height:'110vh'}}>
        <Container>
            <Row>
                <Col className='mt-5 mb-5' lg={6}>
                    <h3 className='mt-5'>Generative AI</h3>
                    <h1 style={{fontSize:'50px'}}>Dropbox and NVIDIA Team to Personalize Generative AI</h1>
                    <h4 style={{lineHeight:'1.5'}} className='mt-4'>Dropbox plans to leverage NVIDIA’s AI foundry to supercharge knowledge work and improve productivity for millions of Dropbox customers with generative AI.</h4>
                    <button className='fw-bolder mt-4' style={{padding:'.8rem', backgroundColor:'greenyellow'}}>Learn more</button>
                </Col>

                <Col lg={6}>
                    <div style={{height:'100%'}} className='d-flex w-100 justify-content-center gap-5 align-items-center'>

                        <div><img width='100%' height='100%' src="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-p@2x.png" alt="" /></div>
                        
                        <div><img width='150' height='150'  src="https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277" alt="" /></div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className='d-flex justify-content-evenly mt-5'>
                       
                            <div style={{width:'225px'}}>
                                <Link className='links' style={{textDecoration:'none', color:'white'}}>
                                    <p>Data center</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>
                            <div style={{width:'225px'}}>
                                <Link style={{textDecoration:'none', color:'white'}}>
                                    <p>Data center</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>
                            <div style={{width:'225px'}}>
                                <Link style={{textDecoration:'none', color:'white'}}>
                                    <p>Data center</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>
                            <div style={{width:'225px'}}>
                                <Link style={{textDecoration:'none', color:'white'}}>
                                    <p>Data center</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>
                            <div style={{width:'225px'}}>
                                <Link style={{textDecoration:'none', color:'white'}}>
                                    <p>Data center</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>
                            <div style={{width:'225px'}}>
                                <Link style={{textDecoration:'none', color:'white'}}>
                                    <p>Data center</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>

                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home1