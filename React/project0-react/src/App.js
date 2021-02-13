import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

let id = 0

const Todo = props => (

  <Row className = 'todo-row'>
    <Col xs lg={4}><input type="checkbox" checked={props.todo.checked} onClick={props.onToggle}/></Col>
    <Col xs lg={4}><span>{props.todo.text}</span></Col>
    <Col xs lg={4}><Button variant="danger" onClick={props.onDelete}>Delete!!!</Button></Col>
  </Row>
)

class App extends React.Component {

  constructor()
  {
    super()
    this.state = {
      todos: [],
    }
  }

  deleteTodo(id)
  {
    this.setState({
    todos: this.state.todos.filter(todo => todo.id != id)
  })
  }

  toggleToDo(id)
  {
    this.setState({
      todos: this.state.todos.map(todo => 
      {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        }
      })
  })
  }

  addTodo()
  {
    let text = prompt('Please Enter Task Description!!')
    this.setState({
      todos: [
        ...this.state.todos,
        { text: text, 
          id:id++, 
          checked:false,},
      ],
    })
  }

  render()
  {
    return (
      <div>
        <Container className="title">
          <Row className="row">
            <Col xs lg={2}></Col>
            <Col xs lg={8}><h1>ToDo Application</h1></Col>
            <Col xs lg={2}></Col>
          </Row>
          <Row className="row">
            <Col xs lg={2}></Col>
            <Col xs lg={8}><Button variant="primary" onClick={() => this.addTodo()}>+ Task</Button></Col>
            <Col xs lg={2}></Col>
          </Row>
          <Row className="row">
            <Col xs lg={2}></Col>
            <Col xs lg={8}>
              <Col xs lg={6}>Number of Tasks: {this.state.todos.length}</Col>
            </Col>
            <Col xs lg={2}></Col>
          </Row>
          <Row className="row">
            <Col xs lg={2}></Col>
            <Col xs lg={8}>
                  <Col xs lg = {6}>Unchecked Tasks: {this.state.todos.filter(todo => !todo.checked).length}</Col>
            </Col>
            <Col xs lg={2}></Col>
          </Row>
        </Container>
        <Container>
          {this.state.todos.map((todo, key) => <Todo key={key} 
                                                     todo={todo}
                                                     onDelete={() => this.deleteTodo(todo.id)}
                                                     onToggle={() => this.toggleToDo(todo.id)}
                                                />)}
        </Container>
      </div>
    );
  }
}

export default App;
