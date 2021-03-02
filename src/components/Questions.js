import React, { useState, useEffect } from "react";
import {
  ListGroupItem,
  ListGroup,
  Badge,
  Container,
  Row,
  Col,
} from "reactstrap";
function Questions(props) {
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [current,setCurrent]=useState("");
  useEffect(() => {
    loadData();
    getAnswers();
  }, []);
  const loadData = async () => {
    let url = "http://localhost:5000/api/questions";
    const response = await fetch(url);
    const json = await response.json();
    setData(json.data);
    console.log(json.data);
  };
  const getAnswers = async (answer) => {
    let url = "http://localhost:5000/api/questions/";
    if (answer) {
      url += answer + "/answers";
      const response = await fetch(url);
      const json = await response.json();
      setAnswer(json.data);
      console.log(json.data);
    }
  };
  const changeAnser=(answer)=>{
    setCurrent(answer._id)
    getAnswers(answer._id);
  }
  return (
    <div>
      <Container>
        <Row>
          <Col xs="9">
            <ListGroup className="mt-5 mr-5 float-right">
              {answer.map((x) => (
                <ListGroupItem key={x._id}>{x.content}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col xs="3">
            <ListGroup className="mt-5 mr-5 float-right">
              {data.map((x) => (
                <ListGroupItem active={x._id===current? true:false} key={x._id} onClick={()=>changeAnser(x)}>
                  <Badge color="light">{x.answer.length}</Badge> {x.content}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Questions;
