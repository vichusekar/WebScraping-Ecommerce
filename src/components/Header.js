import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

function Header() {

    let navigate = useNavigate()

    return <>
        <div className="header">

            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=''
            />
            <NavDropdown title="All" id="navbarScrollingDropdown" style={{ color: 'white', fontSize: '20px' }} >
                <NavDropdown.Item onClick={() => navigate('/baby')}>Baby</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/books')}>Books</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/cars')}>Car</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/electronics')}>Electronics</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/games')}>Games</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/laptops')}>Laptop</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/mobiles')}>Mobiles</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/motorbike')}>Motorbike</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/toys')}>Toys</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/watches')}>Watches</NavDropdown.Item>
            </NavDropdown>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    {<span className="header__optionLineTwo"
                        onClick={() => navigate('/register')}
                        style={{ cursor: 'pointer' }}>
                        Sign Up
                    </span>}
                </div>



                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>



                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>


                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>

            </div>
        </div>


        {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt='' />   */}
    </>
}

export default Header
