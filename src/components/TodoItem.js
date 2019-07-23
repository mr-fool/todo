import React, { Component } from 'react'
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

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
        const { id,title } =this.props.todo;
        const classes = useStyles();
        return (
            
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {" "}
                    {title}
                    {/*<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>*/}
                    <Button onClick={this.props.delTodo.bind(this, id)} variant="contained" color="secondary" className={classes.button}>
                        <DeleteIcon className={classes.rightIcon} />
                    </Button>
                </p>
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: 'none',
    padding: "5px 9px",
    borderRadius: '50%',
    float: "right"
}
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
  }));
export default TodoItem
