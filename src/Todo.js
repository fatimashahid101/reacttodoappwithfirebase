import { List, ListItem, ListItemAvatar, ListItemText, Button, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import './Todo.css'
import db from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.spacing(2, 4, 3),
       },
}))


function Todo(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [input , setInput] = useState('')

    const handleOpen = () => {
        setOpen(true);
    }

    const updateTodo = () => {
        // update todo with the new input text
        db.collection('todos').doc(props.todo.id).set({
        todo: input 
        }, { merge: true});
        setOpen(false);
    }
   
    return (
        <>
        <Modal open={open}
        onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>I'm a Modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update todo</Button>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText className="todo_item_text" primary={props.todo.todo} secondary="Todos"/>
            </ListItem>
            <EditIcon onClick={e => setOpen(true)}/>
            <DeleteForeverIcon  onClick={event => {db.collection('todos').doc(props.todo.id).delete()}}/>
        </List>
        </>
    )
}

export default Todo;