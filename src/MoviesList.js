import React, {PureComponent} from 'react';
import Movie from "./Movie";
import styled from 'styled-components';

class MoviesList extends PureComponent {

    async componentDidMount() {
        try {
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c5153e2bed596792f84f07b042bd3b8f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
            const movies = await res.json();
            this.setState({
                movies: movies.results
            })
        } catch (e) {
            console.log(e)
        }
    }

    state = {
        movies: [],
    };
    render() {
        return (
            <MovieGrid>
                {this.state.movies.map(movie => (
                    <Movie key={movie.id} movie={movie}/>
                ))}
            </MovieGrid>
        );
    }
}

export default MoviesList;

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;
