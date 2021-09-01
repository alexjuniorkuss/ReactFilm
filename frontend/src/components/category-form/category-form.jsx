import 'date-fns';
import {React,Component}  from 'react';
import {makeStyles,TextField,Button,FormControl} from '@material-ui/core';

class CategoryForm extends Component{
    id;
    nameCat;

    constructor(){
        super()
        this.state = {
            selectedDate : this.selectedDate,
            setSelectedDate : this.setSelectedDate
        }
    }
        useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
        }));
        handleId(event)
        {

        } 
    render(){ 
        return ( 
            <FormControl fullWidth >
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                    id="idcat"
                    label="Id"
                    type="number"
                    onChange={this.handleId.bind(this)}
                />
                 <TextField  
                id="categorycat" 
                label="Category" 
                variant="outlined"
                    color="secondary"
                />
                <Button margin="normal"variant="outlined" color="primary">Save</Button>
            </FormControl>
        )}
}
export default CategoryForm;