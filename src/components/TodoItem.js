import React, { Component } from 'react'
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        if (this.props.todo.completed) {
            return {
                background: '#f4f4f4',
                padding: "10px",
                borderBottom: '1px #ccc dotted',
                textDecoration: 'line-through'
            }
        }
        else {
            return {
                background: '#f4f4f4',
                padding: "10px",
                borderBottom: '1px #ccc dotted',
                textDecoration: 'none'
            }
        }
    }


    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/> {" "}
                    {this.props.todo.title}
                </p>
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem
