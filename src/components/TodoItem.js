import React, { Component } from 'react'
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from '@material-ui/core/styles';

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
        const { classes } = this.props;
        const { id,title } =this.props.todo;
        console.log(id);
        return (
            
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {" "}
                    {title}
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

const styles = (theme => ({
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
  export default withStyles(styles)(TodoItem);
