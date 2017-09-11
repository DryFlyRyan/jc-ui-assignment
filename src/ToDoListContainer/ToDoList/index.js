import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Col } from 'react-bootstrap';
import PaperTexture1 from '../../img/grey-paper-texture.jpg'
import ToDo from './ToDo';


const HeaderElement = styled.li`
  list-style: none;
  font-size: 28px;
  border-bottom: 1px solid rgba(205,220,243,1);
  padding: 8px 10px 2px 35px;

  &:first-of-type:after {
    content: '';
    position: absolute;
    left: 25px;
    top: -1px;
    border-left: 1px solid rgba(240,214,213,1);
    border-right: 1px solid rgba(240,214,213,1);
    width: 1px;
    height: 101%;
  }
`
const List = styled.ul`
  font-size: 18px;
  list-style: none;
  position: relative;
  width: 100%;
  margin: 40px auto;
  border: 1px solid #f5f5f5;
  padding: 20px 0;
  background-image: url(${PaperTexture1});
  box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.5),
        0 4px 3px -2px rgba(0,0,0,.1),
        0 1px 1px 0 rgba(0,0,0,.2);
  text-shadow: 0 1px 0 white;

  &:before, &:after {
    content: '';
    position: absolute;
    left: 2px;
    top: 3px;
    background-image: url(${PaperTexture1});
    border: 1px solid #f5f5f5;
    width: 99%;
    height: 100%;
    z-index: -1;
    box-shadow: 0 7px 1px -3px rgba(0,0,0,.1),
          0 1px 1px 0 rgba(0,0,0,.2);
    transform: rotate(2.5deg) ;
  }

  &:after {
    top: 4px;
    transform: rotate(-1deg) ;
  }
`

class ToDoList extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
        <Col
          md={6}
          mdOffset={3}
        >
          <List>
            <HeaderElement>To Do List </HeaderElement>
            {this.props.todos.map(todo => (
              <ToDo 
                key={todo.id} 
                {...todo} 
                onClick={() => this.props.onTodoClick(todo.id, !todo.done)}
                onTodoDelete={this.props.onTodoDelete}
                onTodoEditSubmit={this.props.onTodoEditSubmit}
              />
            ))}
            <ToDo 
              key="NewBox"
              editing={true}
              onTodoNewSubmit={this.props.onTodoNewSubmit}
            />
          </List>
        </Col>

    )
  }
}


export default ToDoList;