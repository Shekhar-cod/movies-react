import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './components/MovieDetails';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/new" exact component={MovieForm} />
        <Route path="/movies/:id" exact component={MovieDetails} />
        <Route path="/movies/:id/edit" exact component={MovieForm} />
      </Switch>
    </Layout>
  );
}

export default App;



