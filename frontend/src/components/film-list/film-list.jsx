import {React,Component}  from 'react';
import { DataGrid } from '@material-ui/data-grid';

class FilmList extends Component
{
    repo;
    
    constructor(props){
        super(props)
        this.state = {
          list: []
        }   
      }
    componentDidMount()
    {
        this.repo = this.props.repo;
        this.setState({
            list : this.repo.listar()
        })
        this.repo.inscrever(this.get_films.bind(this))
    }
    componentWillUnmount()
    {
        this.repo.desinscrever(this.get_films.bind(this))
    }
    get_films(list)
    {
        this.setState({
            list : list
        })
    }
    columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {field: 'namefilm',headerName: 'Movie',width: 270,editable: true,},
        {field: 'category',headerName: 'Category',width: 170,editable: true,},
        {field: 'releasedate',headerName: 'Release Date',type: 'Date',width: 140,editable: true,},
        {field: 'timemovie',headerName: 'Duration',width: 150,editable: true},
      ];
      rows = [
        { id: 1, nameMovie: 'Fast Furious', category: 'Run', firstName: 'Jon', dateRelease: '1999-07-08', duration: '02:30'},
        { id: 2, nameMovie: 'Avatar', category: 'Aventure', firstName: 'Cersei', dateRelease: '2013-01-19', duration: '03:30' },
        { id: 3, nameMovie: 'The quiet place', category: 'Terror', firstName: 'Jaime', dateRelease: '2019-05-16', duration: '02:10'},
        { id: 4, nameMovie: 'Iron Man', category: 'Action', firstName: 'Arya', dateRelease: '2011-03-11', duration: '01:45'}
      ];
    render() { 
            return (
                <section>
                <div style={{height: 250, width: '100%', marginTop: "20px"}}>
                    <DataGrid
                        rows={this.state.list}
                        columns={this.columns}
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
                </section>
            );
            } 
}  
export default FilmList;