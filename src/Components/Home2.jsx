import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function Home2() {
  return (
   
     <>
            <div className='pb-5' style={{backgroundColor:'#111', color:'white'}}>
                <Container>
                    <h1 className='pt-5'>Recommended for you <span style={{fontSize:'25px'}}><i class="fa-solid fa-gear"></i></span></h1>
                    <div className='d-flex gap-5 mt-5'>
        
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/buy/geforce-ada-40-series-og-1200x630@2x.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <p>Lorem</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipi</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
        
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/buy/geforce-ada-40-series-og-1200x630@2x.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <p>Lorem</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipi</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
        
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/buy/geforce-ada-40-series-og-1200x630@2x.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <p>Lorem</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipi</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
        
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/buy/geforce-ada-40-series-og-1200x630@2x.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <p>Lorem</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipi</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   
                    </div>
                </Container>
            </div>
    
            <div style={{height:'125px', width:'100%', backgroundColor:'whitesmoke'}}>
                <div className='d-flex ms-5'>
                    <div className='ms-5'><img height={'100px'} src="https://pbs.twimg.com/profile_images/1145524454170062848/U4lxVYEw_400x400.png" alt="" /></div>
                    <div>
                        <h1 className='mt-3 ms-5'>The Conference for the Era of AI</h1>
                        <h4 className='ms-5'>Join us in person at San Jose, CA or virtually on March 18–21, 2024. Save on Passes </h4>
                    </div>
                </div>
            </div>
     </>
   
  )
}

export default Home2