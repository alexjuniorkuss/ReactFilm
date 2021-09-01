import 'date-fns';
import {React,Component}  from 'react';
import {makeStyles,TextField,Button,FormControl,NativeSelect } from '@material-ui/core';
import Film from '../../Model/Film';

class FilmForm extends Component{
    id;
    namefilm;
    releasedate;
    timemovie;
    category;   

        useStyles = makeStyles((theme) => (
            {
                container: {display: 'flex',flexWrap: 'wrap',
            },
          textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
        }));
       // classes = this.useStyles();
        
        handleId(event)
        {
            this.id = event.target.value;
        } 
        handleNameFilm(event)
        {
            this.namefilm = event.target.value;
        } 
        handleDateChange(event)
        {
            this.releasedate = event.target.value;
        }
        handleTimeMovie(event)
        {
            this.timemovie = event.target.value;
        }
        handleCategory(event)
        {
            this.category = event.target.value;
        }
        handleSubmit(event)
        {
            event.stopPropagation();
            event.preventDefault();
            let film = new Film();
            film.id = this.id;
            film.namefilm = this.namefilm;
            film.releasedate = this.releasedate;
            film.category = this.category;
            film.timemovie = this.timemovie;
            this.props.create(film);
        }
    render(){ 
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
            <FormControl fullWidth >
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                    id="id"
                    label="Id"
                    type="number"
                    onChange={this.handleId.bind(this)}
                />
                 <TextField  
                    variant="outlined"
                    color="secondary"
                    id="namefilm" 
                    type="text"
                    label="Film" 
                    onChange={this.handleNameFilm.bind(this)}
                />
                 <label id="labelCateogory">Category</label>

                <NativeSelect
                    defaultValue='none'
                    margin ='none'
                    id="category" 
                    onChange={this.handleCategory.bind(this)}
                >
                    <option value="">None</option>
                    <option value="Terror">Terror</option>
                    <option value="Avanture">Avanture</option>
                    <option value="Drama">Drama</option>
                </NativeSelect>

                <TextField
                    fullWidth
                    margin="normal"
                    id="releasedate"
                    label="Release Date"
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleDateChange.bind(this)}
                />

                <TextField
                    id="timemovie"
                    label="Time of Movie"
                    margin="normal"
                    type="time-movie"
                    variant="outlined"
                    color="secondary"
                    defaultValue="00:00"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{step: 300 }} // 5 min
                    onChange={this.handleTimeMovie.bind(this)}
                />
            
                    <Button type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                </FormControl>
            </form>
            );
    }
}
export default FilmForm;