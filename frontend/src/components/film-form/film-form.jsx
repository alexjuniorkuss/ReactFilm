import 'date-fns';
import {React,Component}  from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {TextField,Button,FormControl,MenuItem,Grid } from '@material-ui/core';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';

class FilmForm extends Component{

    constructor(){
        super()
        this.state = {
            selectedDate : this.selectedDate,
            setSelectedDate : this.setSelectedDate
        }
    }
        MaterialUIPickers(){
        [this.selectedDate, this.setSelectedDate] = this.useState(new Date('2021-08-18'))
        this.handleDateChange = (date) => {this.setSelectedDate(date) }
    } 
    render(){ 
        return ( 
            <FormControl fullWidth >
                 <TextField  
                id="name-film" 
                label="Film Name" 
                />
                <TextField id="select" label="Category" value="0" select>
                <MenuItem value="10">Terror</MenuItem>
                <MenuItem value="20">Comedy</MenuItem>
                </TextField>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify='space-around'>
                    <KeyboardDatePicker
                    disableToolbar
                    variant='dialog'
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="release-date"
                    label="Release Date"
                    value={this.selectedDate}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                    />
                    <Button variant="outlined" color="primary">Save</Button>
                    </Grid>
                </MuiPickersUtilsProvider>
            </FormControl>
        )}
}
export default FilmForm;