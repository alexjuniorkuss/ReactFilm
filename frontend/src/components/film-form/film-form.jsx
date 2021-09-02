import 'date-fns';
import React, {useState}  from 'react';
import {TextField,Button,FormControl,NativeSelect } from '@material-ui/core';
import Film from '../../Model/Film'

function FilmForm({create,repoCat}){
    let [lista, setList] = useState(repoCat.listar());
    repoCat.inscrever(setList)

        return (
            <form onSubmit={(e) =>{
                e.stopPropagation();
                e.preventDefault();
                let model={
                    id : e.target[0].value,
                    nameFilm : e.target.nameFilm.value,
                    category : e.target.category.value,
                    releasedate : e.target.releasedate.value,
                    timemovie : e.target.timemovie.value
                }
                create(new Film(model));
                e.target.nameFilm.value = "";
                e.target.id.value = "";
                e.target.category.value = "defaultValue";
                e.target.releasedate.value = "defaultValue";
                e.target.timemovie.value = "00:00";
            }} 
            >
            
            <FormControl fullWidth >
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    color="secondary"
                    id="id"
                    label="Id"
                    type="number"
                />
                 <TextField  
                    variant="outlined"
                    color="secondary"
                    id="nameFilm" 
                    type="text"
                    label="Film"                     
                />
                 
                    <NativeSelect
                        defaultValue='none'
                        id="category" 
                    >
                        {lista.map((c,i)=>{
                            return <option key={i} value={c.idcat}>{c.categorycat}</option>;
                        })}
                        {/* <option value="">Category</option>
                        <option value="Terror">Terror</option>
                        <option value="Avanture">Avanture</option>
                        <option value="Drama">Drama</option> */}
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
                    
                />
            
                    <Button type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                </FormControl>
            </form>
            );
}
export default FilmForm;