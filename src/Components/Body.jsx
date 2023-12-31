import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Body.css'
import Card from 'react-bootstrap/Card';

function Body() {
  return (
    <>
    <div className='mt-5'>
        <Row>
        <h1 className='ms-5'><span className='ms-5'>Lorem</span></h1>
            <Col lg={5}>
                <div className='ms-5'>
                    <p className='mt-4 ms-5' style={{fontSize:'25px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quam dolorum debitis voluptates inventore officia iusto iure cumque ex nihil nobis beatae doloribus illo, ut consequatur quod porro pariatur. Aspernatur.</p>
                    <Link style={{textDecoration:'none', color:'black', fontSize:'20px', fontWeight:'bold'}} className='ms-5 '><span style={{color:'green'}}><i class="fa-solid fa-arrow-right fa-rotate-90"></i></span> Quick Links</Link>
                </div>
            </Col>

            <Col lg={7}>
            <div className='d-flex justify-content-between'>
                <Card className='card' style={{ width: '27rem' }}>
                    <Card.Img height={'250px'} variant="top" src="https://i.insider.com/643716a65f081b0019c0e94f?width=700" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        <p>Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure architecto magnam doloremque ad tempora atque iste optio temporibus culpa quia recusandae nam dolore, unde ipsum explicabo molestiae quis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus, ratione at temporibus, magni molestias, quam nam reprehenderit modi quis ad fuga a minus voluptate aliquam voluptas dignissimos magnam voluptates.</p>    
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card' style={{ width: '27rem' }}>
                    <Card.Img height={'250px'} variant="top" src="https://i.insider.com/643716a65f081b0019c0e94f?width=700" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        <p>Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure architecto magnam doloremque ad tempora atque iste optio temporibus culpa quia recusandae nam dolore, unde ipsum explicabo molestiae quis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus, ratione at temporibus, magni molestias, quam nam reprehenderit modi quis ad fuga a minus voluptate aliquam voluptas dignissimos magnam voluptates.</p>    
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </Col>
        </Row>

    </div>
    </>
  )
}

export default Body