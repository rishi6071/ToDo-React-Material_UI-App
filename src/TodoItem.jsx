import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const TodoItem = (props) => {
    return (
        <>
            <ListItem>
                <ListItemText primary={props.task} secondary={props.taskTime} 
                    style={{ textDecoration: props.deletedTask ? "line-through" : "none", textTransform : "capitalize" }} 
                />

                <ListItemAvatar className="mr-3">
                    <Button className="list-btn rounded-circle"
                        onClick={() => props.onSelect(props.id)}>
                        <DeleteIcon fontSize="medium" />
                    </Button>
                </ListItemAvatar>
            </ListItem>
        </>
    );
}

export default TodoItem;