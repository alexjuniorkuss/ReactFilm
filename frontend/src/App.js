import React, { Component } from 'react';
import FilmForm from './components/film-form/film-form';
import FilmList from './components/film-list/film-list';
import { Container,Grid } from '@material-ui/core';
import CategoryForm from './components/category-form/category-form'
import FilmRepository from './Repository/FilmRepository';

class App extends Component{
  repo;

  constructor(){
    super();
    this.repo = new FilmRepository();
  }
  render() {
    return(
    <section>
      <Container maxWidth="sm">
      <Grid
      container
      direction="column"
      alignItems="center"
      >
        <h1>WELLCOME TO NICEDICK FILMS</h1>
      </Grid>
        <FilmForm  create={this.repo.create.bind(this.repo)}/>
      </Container>
      <Container  maxWidth="md">
        <FilmList repo={this.repo}/>  
        <CategoryForm />
      </Container>
    </section>
    )
  }
}
export default App;