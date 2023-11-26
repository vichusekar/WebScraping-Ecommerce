import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Header() {
    let navigate = useNavigate()

    let [getdata, setGetdata] = useState([])

    let handlegetElectronics = async () => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/all`)
            if (res.status === 200) {
                setGetdata(res.data.products)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        handlegetElectronics()
    }, [])

    return <>
        <div className='header'>
            <Navbar expand="lg" className="bg-light">
                <Container fluid>
                    <img className='image-wrapper' src="data:image/png;base64,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" alt="loading" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="All" id="navbarScrollingDropdown" >
                                <NavDropdown.Item onClick={() => navigate('/baby')}>Baby</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/books')}>Books</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/cars')}>Car</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/electronics')}>Electronics</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/games')}>Games</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/laptop')}>Laptop</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/mobiles')}>Mobiles</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/motorbike')}>Motorbike</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/toys')}>Toys</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/watches')}>Watches</NavDropdown.Item>
                            </NavDropdown>
                            <input type='search' placeholder='search' className='search-input' />
                            <Nav.Link href="#" className='nav-link'>
                                HelloGuest
                            </Nav.Link>
                            <Nav.Link href="#" >
                                SignIn
                            </Nav.Link>
                            <Nav.Link href="#" >
                                Returns
                            </Nav.Link>
                            <Nav.Link href="#" >
                                Yourprime
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <ShoppingCartIcon />
                </Container>

            </Navbar>
     </div>
        {/* <img className='body-image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt='' /> */} 
    </>
}

export default Header
