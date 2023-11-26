import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Header from './Header'
function Baby() {

    let [data, setData] = useState([])
    let navigate = useNavigate()

    let handlegetBaby = async () => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}/baby`)
            if (res.status === 200) {
                setData(res.data.products)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handlegetBaby()
    }, [])

    return <>
        <Header />
        <div className='container-fluid' style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }} >

            <div >
                {
                    data.map((e, i) => {
                        return <Card style={{ width: '18rem' }} className='bg-color'>
                            <Card.Body>
                                <Card.Title>Details</Card.Title>
                                <Card.Text>
                                    <tr key={i} >
                                        <td>{e.title}</td>
                                        <td>{e.price}</td>
                                        <td>{e.ratings}</td>
                                        <td>{e.finalprice}</td>
                                    </tr>
                                </Card.Text>
                                <Button style={{ color: 'black', backgroundColor: 'orange' }}>Buy now</Button>
                                <Button style={{ color: 'black', backgroundColor: 'yellow', marginLeft: '10px ' }}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    }
                    )}
            </div>
        </div>
    </>
}

export default Baby
