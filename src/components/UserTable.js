import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table}from 'react-bootstrap'
import { Button} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const UserTable = () => {
  return (
    <div>
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Address</th>
      <th>PhoneNumber</th>
      <th>Date Created</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td></td>
      <td> 
         
            </td>
            <td>
                <Button variant="contained" style={{backgroundColor:"rgb(33,37,41)",marginRight:"20px"}} startIcon={<ModeEditIcon />}>
                </Button>

                <Button variant="contained" style={{backgroundColor:"rgb(33,37,41)"}} startIcon={<DeleteForeverIcon />}>
                </Button>

            </td>
    </tr>
    
  </tbody>
</Table>
    </div>
  )
}

export default UserTable