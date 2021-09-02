import 'date-fns';
import React  from 'react';
import {TextField,Button,FormControl} from '@material-ui/core';
import '../../assets/css/filmform.css';
import Category  from '../../Model/Category'; 

function CategoryForm({create}){
        return ( 
            <form onSubmit={(e) =>{
                e.stopPropagation();
                e.preventDefault();
                let cate = {
                    idcat : e.target.idcat.value,
                    categorycat : e.target.categorycat.value
                }
                create(new Category(cate));
                e.target.idcat.value = "";
                e.target.categorycat.value = "";
            }}>

            <FormControl fullWidth >
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                    id="idcat"
                    label="Id"
                    type="number"
                />
                 <TextField  
                id="categorycat" 
                label="Category" 
                variant="outlined"
                margin="normal"
                color="secondary"
                />
               <Button  type="submit" variant="contained" color="primary">
                        Save
                    </Button>
            </FormControl>
            </form>
        )}
export default CategoryForm;