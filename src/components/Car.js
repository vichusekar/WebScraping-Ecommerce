import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Header from './Header';
import Sidebar from './Sidebar';

function Car() {

    let [data, setData] = useState([])

    let handlegetCars = async () => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/cars`)
            if (res.status === 200) {
                setData(res.data.products)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handlegetCars()
    }, [])

    return <>
        <Header />
        <div className='d-flex w-60% flex-wrap' style={{ justifyContent: 'space-around', marginLeft: '10px', size: '60px', height: '150px' }}>
            {

                data.map((e, i) => {
                    return <Card style={{ width: '18rem' }} className='bg-color'>
                        <Card.Body>
                            <Card.Text>
                                <img src={e.image} alt='' style={{ width: '200px', height: '200px' }} />
                                <p style={{ fontSize: '15px' }}>{e.title}</p>
                                <p>{e.price}</p>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNm3O0L9PWAzL3oGmbsZl_EgQEggF6mlR1w&usqp=CAU' alt='' style={{ width: '100px' }} />
                                <p>{e.ratings}</p>
                            </Card.Text>
                            <Button style={{ color: 'black', backgroundColor: 'orange' }}>Buy now</Button>
                            <Button style={{ color: 'black', backgroundColor: 'yellow', marginLeft: '10px ' }}>Add to cart</Button>
                        </Card.Body>
                    </Card>
                }
                )}
        </div>
    </>
}

export default Car
