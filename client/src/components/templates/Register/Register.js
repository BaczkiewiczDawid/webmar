import { useState } from 'react';
import { Wrapper, Header, BasicInfo, FormWrapper, Form, Input, Button, Switch } from './Register.styles';
import Axios from 'axios';

const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSetData = (e) => {
        e.preventDefault();

        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleAddUser = () => {
        Axios.post('http://localhost:3001/api/register', {
            userData: userData
        }).then(() => {
            console.log('user added')
        })
    }

    return ( 
        <Wrapper>
            <Header>
                <h1>Sign up to<br />Webmar</h1>
                <BasicInfo>Add and comment photos, check what's going on with your friends and write to them!</BasicInfo>
            </Header>
            <FormWrapper>
                <Form>
                    <Input name="name" type="text" placeholder="Name" onChange={(e) => handleSetData(e)} />
                    <Input name="email" type="text" placeholder="E-Mail" onChange={(e) => handleSetData(e)} />
                    <Input name="password" type="password" placeholder="Password" onChange={(e) => handleSetData(e)} />
                    <Button onClick={handleAddUser}>Register now</Button>
                    <Switch>Already have an account? <a href="/login">Login now!</a></Switch>
                </Form>
            </FormWrapper>
        </Wrapper>
     );
}
 
export default Register;