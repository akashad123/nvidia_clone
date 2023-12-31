import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
     <Navbar style={{position:'fixed', zIndex:'1'}} className="bg-body-tertiary w-100">
          <Navbar.Brand className='ms-5' href="">
            <img
              alt=""
              src="./nvidialogo.png"
              width="40"
              height="30"
              className='ms-5'
            />
            <span style={{fontFamily:'sans-serif', fontWeight:'bolder'}}>NVIDIA</span>
          </Navbar.Brand>
                <div className=' ms-3 d-flex justify-content-between w-100'>
                    <div className='d-flex justify-content-start gap-4 w-50'>
                        <Nav.Link href="">Products</Nav.Link>
                        <Nav.Link href="">Solutions</Nav.Link>
                        <Nav.Link href="">Industries</Nav.Link>
                        <Nav.Link href="">For You</Nav.Link>
                    </div>
                    <div className='d-flex justify-content-center gap-4 w-50'>
                        <Nav.Link href="">Shop</Nav.Link>
                        <Nav.Link href="">Drivers</Nav.Link>
                        <Nav.Link href="">Support</Nav.Link>
                        <Nav.Link className='ms-5' href=""><i class="fa-solid fa-magnifying-glass fa-lg"></i></Nav.Link>
                        <Nav.Link href=""><i class="fa-regular fa-user fa-lg"></i></Nav.Link>
                    </div>
                </div>
      </Navbar>
    </>
  )
}

export default Header