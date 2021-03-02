import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
  import {useState} from 'react'
  import alertify from 'alertifyjs';
  const SignUp =()=> {
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [password1, setPassword1] = useState("")
      const alertifys=(res)=>{
          if(res.success===false){
            alertify.error(res.err)
          }          
          else{
            alertify.success(res.data.name+ `${" "}Registere`)
          }
        }
      
      const onSubmitHandler=async(e)=>{
        e.preventDefault();
          await fetch("http://localhost:5000/api/auth/register",{
           method:"POST",
           body: JSON.stringify({"name":name.name,"email":email.email,"password":password.password,"password1":password1.password1}),
           headers:{'Content-Type': 'application/json'}
         }).then(res=>res.json())
         .then(res=>res.success===false? alertifys(res):alertifys(res))         
        }
      
      const onName=(e)=>{
        setName({"name":e.target.value})
      }
      const onEmail=(e)=>{
        setEmail({"email":e.target.value})
      }
      const onPass=(e)=>{
        setPassword({"password":e.target.value})
      }
      const onPass1=(e)=>{
        setPassword1({"password1":e.target.value})
      }
      
      return (  
        <Container className="App mt-5 "  >
          <h2>Sign Up</h2>
          
          <Form className="form" onSubmit={onSubmitHandler}>
            <Col xs="6">
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Name"
                  onChange={onName}
                />
              </FormGroup>
            </Col>          
            <Col xs="6">
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  email="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                  onChange={onEmail}
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="examplePassword">Password 1</Label>
                <Input
                  type="password"
                  password="password"
                  id="examplePassword"
                  onChange={onPass}
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="examplePassword1">Password 2</Label>
                <Input
                  type="password"
                  password1="password1"
                  id="examplePassword1"
                  placeholder="********"
                  onChange={onPass1}
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>
      );
  }
  export default SignUp;