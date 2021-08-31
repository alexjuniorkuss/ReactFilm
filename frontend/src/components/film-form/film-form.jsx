import React, { Component } from 'react';
import {TextField,FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';

class FilmForm extends Component{
    
    render() { 
        return ( 
            <FormControl fullWidth>
                <TextField  id="name-film" label="Film Name" />
            </FormControl>
        )}
}
export default FilmForm;