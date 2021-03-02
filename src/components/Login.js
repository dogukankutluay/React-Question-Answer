import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import React, {useState} from 'react'
import {useCookies}from 'react-cookie';
import {useHistory}from 'react-router-dom'
function Login () {
    const [email,setEmail]=useState("");
    const [password,setpass]=useState("");
    const [cookie,setCookie]=useCookies(["user"])
    const history=useHistory()
 
    const onchangeHandlerPass=(e)=>{
        let pass=e.target.value
        setpass(pass);  
    }
    
    const onchangeHandlerEma=(e)=>{
      let value=e.target.value
      setEmail(value); 
    }
    
    const onSubmitHandler=async(e)=>{
      e.preventDefault();

      const response =await 
      fetch("http://localhost:5000/api/auth/login",{
        
        method:"POST",
        body: JSON.stringify({"email":email,"password":password}),
        headers:{'Content-Type': 'application/json'}
      })
      const json=await response.json();
      const data=json.acces_token;
      console.log(data)
      setCookie("user",(data),{
        path:"/",
        maxAge:3600,
        sameSite:true
      })
      console.log(json)  
      if(cookie){
        history.push("/about")
      }
    }
    return (
      <Container className="App mt-5 "  >
        <h2>Log In</h2>
        <Form className="form" onSubmit={onSubmitHandler}>
          <Col xs="6">
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                email="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
               onChange={onchangeHandlerEma}/>
            </FormGroup>
          </Col>
          <Col xs="6">
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                pass="password"
                id="examplePassword"
                placeholder="********"
                onChange={onchangeHandlerPass}
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
}
export default Login;