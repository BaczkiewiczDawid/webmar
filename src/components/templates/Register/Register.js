import { Wrapper, Header, BasicInfo, FormWrapper, Form, Input, Button, Switch } from './Register.styles';

const Register = () => {
    return ( 
        <Wrapper>
            <Header>
                <h1>Sign up to<br />Webmar</h1>
                <BasicInfo>Add and comment photos, check what's going on with your friends and write to them!</BasicInfo>
            </Header>
            <FormWrapper>
                <Form>
                    <Input type="text" placeholder="Name" />
                    <Input type="text" placeholder="E-Mail" />
                    <Input type="password" placeholder="Password" />
                    <Button>Register now</Button>
                    <Switch>Already have an account? <a href="/login">Login now!</a></Switch>
                </Form>
            </FormWrapper>
        </Wrapper>
     );
}
 
export default Register;