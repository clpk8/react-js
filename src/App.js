import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";

const App = () => (

    // state = {
    //     movies: []
    // };
    //
    // //Perfect place to fetch data, async if needed
    // //using async is the best way to dealing with promises
    // //use async to say we hitting an API, use await to specisfy we going to wait till everything to come back
    // async componentDidMount() {
    //     try {
    //         const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c5153e2bed596792f84f07b042bd3b8f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    //         const movies = await res.json();
    //         this.setState({
    //             movies: movies.results
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }


    <Router>
        <div className="App">
            <header className="App-header">
                {/*//change route without page refresh, route back to home*/}
                <Link to="/">
                <img src={logo} className="App-logo" alt="logo"/>
                </Link>
            </header>
            <Switch>
                <Route exact path="/" component={MoviesList}/>
                <Route exact path="/:id" component={MovieDetail}/>
            </Switch>
        </div>
    </Router>

)


export default App;
