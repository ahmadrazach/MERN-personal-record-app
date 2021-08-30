import react, {setState, useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow,Input,InputLabel, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers,getoneUser } from '../Service/api';
import { Link } from 'react-router-dom';
import React from 'react';

const initialValue = {
    id:'',
    name: '',
    username: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

var res=[];
const AllUsers = () => {


    const [users, setUsers] = useState(['']);
   
    
    const [id,setid]=useState([]);
 
    const classes = useStyles();
    
    useEffect(() => {
     
        getAllUsers();
    
    }, []);


    const getAllUsers = async (pid) => {
        
            let response = await getUsers(pid);
            console.log("haa",response.data);
            setUsers(response.data);

        
    }

    const getoneUsers = async (pid) => {

        let response = await getoneUser(pid);
        res.push(response.data);
        setUsers(res);
       
    
    res=[];
   ids=0;
 
}
var ids=0;
const handleInput = async event => {
   ids=0;
    ids= event.target.value ;
  };

    return (
        <div>
            <center>
            <div>
                <br></br>
            <InputLabel htmlFor="my-input">Search by Id</InputLabel>
             <Input  onChange={handleInput} />
             <Button  onClick={() => getoneUsers(ids)} >Submitt</Button>
             </div>
             </center>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    )
}

export default AllUsers;