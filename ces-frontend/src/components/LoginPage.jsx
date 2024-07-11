import React, { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import CardImg from 'react-bootstrap/CardImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/pnclogo.png'
import './Login.css'

function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/accounts/', {
                username,
                password,
            });
            console.log(response.data); // Assuming your backend returns data upon successful login
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <body className="bg">
            <Card style={{width: '900px'}}>
                <Card.Img style={{width: '35rem', marginLeft: '6rem'}} variant='top' src={Logo}/>
                <Card.Title style={{textAlign: 'center'}}>Community Extension Service Management System</Card.Title><br/>
                <Form onSubmit={handleLogin}>
                    <Form.Group className='mb-3' controlId='LogUsername'>
                        <Form.Label className='h5'>Username</Form.Label>
                        <InputGroup>
                            <Form.Control 
                                className='input'  
                                type='text' 
                                placeholder='Insert your username here' 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}/>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='LogPass'>
                        <Form.Label className='h5'>Password</Form.Label>
                        <InputGroup>
                        <Form.Control
                                className='input'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Insert your Password here'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                variant='success'
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={faEye} />
                            </Button>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="CheckBox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    <Form.Group className='d-grid gap-2'>
                        <Button
                            style={{ marginTop: '2rem' }}
                            variant='success'
                            type='submit'
                            size='lg'
                        >
                            Submit
                        </Button>
                    </Form.Group>
                    
                </Form>
            </Card>
        </body>
    );
}

export default LoginPage;