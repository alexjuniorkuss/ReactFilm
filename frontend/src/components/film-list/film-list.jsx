import React, {useState}  from 'react';
import { DataGrid } from '@material-ui/data-grid';

function FilmList({repo}) 
{
    let [lista, setList] = useState(repo.listar());
    repo.inscrever(setList);

    let columns = [
        {field: 'id', headerName: 'ID', width: 100 },
        {field: 'nameFilm',headerName: 'Movie',width: 270,editable: true,},
        {field: 'category',headerName: 'Category',width: 170,editable: true,},
        {field: 'releasedate',headerName: 'Release Date',type: 'Date',width: 140,editable: true,},
        {field: 'timemovie',headerName: 'Duration',width: 150,editable: true},
      ];
            return (
                <section>
                <div style={{height: 250, width: '100%', marginTop: "20px"}}>
                    <DataGrid
                        rows={lista}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
                </section>
            );
} 
export default FilmList;