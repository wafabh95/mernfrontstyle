import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from "react-bootstrap"
import { Button} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CustomizedInputBase from "./CustomizedInputBase"
import  './Navbar.css'


const Navbars = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">User Managment</Navbar.Brand>
        <Nav className="me-auto">
        <CustomizedInputBase/>

          <Nav.Link href="#pricing">
            <Button variant="contained" style={{backgroundColor:"rgb(33,37,41)"}} startIcon={<AddBoxIcon />}>
                   ADD
            </Button>
          </Nav.Link>

        </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars