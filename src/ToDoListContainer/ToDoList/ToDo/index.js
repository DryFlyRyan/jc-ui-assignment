import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, FormControl } from 'react-bootstrap';

const FontAwesome = styled.a`
  text-decoration: none;
  color: inherit;
  margin: auto 5px;

  &:hover, &:visited {
    text-decoration: none;
    color: inherit;
  }
`

const Todo = styled.div`
  list-style: none;
  border-bottom: 1px solid rgba(205,220,243,1);
  padding: 8px 10px 2px 35px;
  user-select: none;
  cursor: pointer;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;

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
const DescriptionBlock = styled.a`
  color: inherit;
  text-decoration: ${props => props.done ? ' line-through' : ''};
  &:hover {
    text-decoration: ${props => props.done ? ' line-through' : 'none'};
    color: inherit;
  }
`

const EditField = styled(FormControl)`
  font-size: 18px;
  color: #aaa;
  height: 25px;
  background: transparent;
  width: 80%;
  border: none;
  padding: 0;
  box-shadow: none;
  &:focus {
    box-shadow: none;
  }
`

const Icons = styled.span`
  text-decoration: none !important;
`

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      editing: this.props.editing || false,
      fieldChanged: false,
      fieldValue: this.props.description || '',
      savedValue: ''
    }
  }

  handleFieldChange = (e) => {
    const { value } = e.target;

    console.log(this.state)
    
    if (!this.state.fieldChanged) {
      this.setState({
        fieldValue: value,
        savedValue: this.state.fieldValue,
        fieldChanged: true
      });
    } else {
      this.setState({
        fieldValue: value
      });
    }
  }

  mouseOver = () => {
    this.setState({active: true});
  }

  mouseLeave = () => {
    this.setState({active: false});
  }

  startEdit = () => {
    this.setState({editing: true});
  }

  deleteTodo = () => {
    this.setState({deleted: true});
  }

  keyPressSubmit = (e) => {
    if (e.key === "Enter") {
      this.submitTodo()
    }
  }

  submitTodo = () => {
    // Script free zone.
    var input = this.state.fieldValue;
    var div = document.createElement("div");
    div.innerHTML = input;
    var text = div.textContent || div.innerText || "";

    // API calls are expensive. Let's not do them if we don't have to.
    if ( 
      text.length && 
      this.state.savedValue &&
      text !== this.state.savedValue
    ) {
      this.props.onTodoEditSubmit(this.props.id, text);
      this.setState({
        editing: false,
        editCursorSelect: 0
      })
    } 
    // Is this coming from the Add Todo line?
    else if (
      text.length && 
      !this.state.savedValue.length
    ) {
      this.props.onTodoNewSubmit(this.state.fieldValue)
      this.setState({
        fieldValue: '',
        savedValue: '',
        fieldChanged: false
      })
    } else {
      this.cancelEdit()
    }
  }

  cancelEdit = () => {
    if (!this.props.id) {
      this.setState({
        fieldValue: ""
      })
    } else if (!this.state.savedValue) {
      this.setState({
        editing: false,
        editCursorSelect: 0,
      })
    } else {
      this.setState({
        editing: false,
        editCursorSelect: 0,
        fieldValue: this.state.savedValue
      })
    }
  }
  render() {
    return (
      <Todo
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >
        {this.state.editing ? 
          (
            <EditField 
              value={this.state.fieldValue}
              onChange={this.handleFieldChange}
              onKeyPress={this.keyPressSubmit}

              placeholder="Add a New Todo"
              autoFocus
            />
          ) : (
            <DescriptionBlock
              done={this.props.done}
              onClick={this.props.onClick}
            >
              {this.props.description}
            </DescriptionBlock>
          ) 
        }
        <Icons>
          {this.state.editing && this.state.fieldValue &&
            <FontAwesome
              className={this.state.active ? "fa fa-ban" : ""}
              onClick={this.cancelEdit}
            />
          }

          {/* No need to show these on the new todo */}
          {this.props.id && !this.state.editing &&
            <FontAwesome 
              className={this.state.active ? "fa fa-pencil" : ""}
              onClick={this.startEdit}
            />
          }
          {this.props.id &&          
            <FontAwesome 
              className={this.state.active ? "fa fa-times" : ""} 
              onClick={() => this.props.onTodoDelete(this.props.id)}  
            />
          }
        </Icons>
      </Todo>
    )
  }
}

export default TodoItem;