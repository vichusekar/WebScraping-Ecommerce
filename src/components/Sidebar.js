import React from 'react'
import Header from './Header';

function Sidebar() {
    return <>
        <Header />
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" style={{ color: 'white', display: 'content' }} id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-wrench"></i>
                    <span>Components</span>
                </a>
            </li>
        </ul>
        {/* 

        <div className='sidebar-card'>
            <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div> */}
    </>
}

export default Sidebar
