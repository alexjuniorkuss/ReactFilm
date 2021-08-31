import React, { Component } from 'react';
import FilmForm from './components/film-form/film-form';
import FilmList from './components/film-list/film-list';
import { Container } from '@material-ui/core';

class App extends Component{
  render() {
    return(
    <section>
      <Container maxWidth="sm">
      <h1>Wellcome to NiceDick Films</h1>
      <FilmForm />
      <FilmList />
      </Container>
    </section>
    )
  }
}
export default App;