import React, { Component } from 'react';
import './App.css';
import MovieList from './components/Movie/List';
import data from './data';

const App = (props) => <MovieList data={data} />;

export default App;
