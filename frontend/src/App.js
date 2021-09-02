import React,{useState} from 'react';
import FilmForm from './components/film-form/film-form';
import FilmList from './components/film-list/film-list';
import { Container, Grid } from '@material-ui/core';
import CategoryForm from './components/category-form/category-form'
import FilmRepository from './Repository/FilmRepository';

function App() {
  let repo = new FilmRepository();
  let [repoCat] = useState(new FilmRepository());
  return (
    <section>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <h1>WELLCOME TO NICEDICK FILMS</h1>
        </Grid>
        <FilmForm create={repo.create.bind(repo)} repoCat={repoCat} />
      </Container>
      <Container maxWidth="md">
        <FilmList repo={repo}  />
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            alignItems="center"
          >
            <h1>CATEGORY</h1>
          </Grid>
          <CategoryForm create={repoCat.create.bind(repoCat)}/>
        </Container>
      </Container>
    </section>
  )
}
export default App;