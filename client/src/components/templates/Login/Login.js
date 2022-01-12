import { Wrapper ,Header, BasicInfo, FormWrapper, Form, Input, Button, Switch } from './Login.style';

const Login = () => {
    return ( 
        <Wrapper>
            <Header>
                <h1>Log in to<br />Webmar</h1>
                <BasicInfo>Add and comment photos, check what's going on with your friends and write to them!</BasicInfo>
            </Header>
            <FormWrapper>
                <Form>
                    <Input type="text" placeholder="E-Mail" />
                    <Input type="password" placeholder="Password" />
                    <Button to="/">Login now</Button>
                    <Switch>Don't have an acocunt? <a href="/register">Register now!</a></Switch>
                </Form>
            </FormWrapper>
        </Wrapper>
     );
}
 
export default Login;