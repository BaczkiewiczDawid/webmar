import { useState } from 'react'
import { Wrapper ,Header, BasicInfo, FormWrapper, Form, Input, Button, Switch } from './Login.style';
import Axios from 'axios';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [isLoggedCorrectly, setIsLoggedCorrectly] = useState(false);

    const handleLoginData = (e) => {
        e.preventDefault();

        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        Axios.post('http://localhost:3001/api/getpassword', {
            loginData: loginData
        }).then((response) => {
            console.log(response.data)
            if (response.data) {
                setIsLoggedCorrectly(true);
            } else {
                setIsLoggedCorrectly(false);
            }
        })
    }

    return ( 
        <Wrapper>
            <Header>
                <h1>Log in to<br />Webmar</h1>
                <BasicInfo>Add and comment photos, check what's going on with your friends and write to them!</BasicInfo>
            </Header>
            <FormWrapper>
                <Form>
                    <Input name="email" type="text" placeholder="E-Mail" onChange={(e) => handleLoginData(e)} />
                    <Input name="password" type="password" placeholder="Password" onChange={(e) => handleLoginData(e)} />
                    <Button to={isLoggedCorrectly ? '/' : '#'} onClick={handleLogin}>Login now</Button>
                    <Switch>Don't have an acocunt? <a href="/register">Register now!</a></Switch>
                </Form>
            </FormWrapper>
        </Wrapper>
     );
}
 
export default Login;