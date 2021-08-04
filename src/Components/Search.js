import React from 'react';
import {Navbar, Container, Nav, FormControl} from "react-bootstrap";
import {Rating} from "@material-ui/lab";

export const Search = ({setSearchTitle, searchRating, setSearchRating}) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">TuniBest</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        onChange={(e)=>setSearchTitle(e.target.value)}
                    />
                    <Rating  name="simple-controlled"
                             value={searchRating}
                             onChange={(event, newValue) => {
                             setSearchRating(newValue)}} />
                </Container>
            </Navbar>   
        </div>
    )
}
