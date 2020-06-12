import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import Overdrive from 'react-overdrive';
//Rules:
//Should have a proptype for every single prop that have used in component
//alwast let it either be isRequired or default props.


//Functional stateless components: Anytime if you are not using states, refs, or life cycle methods.

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const Movie = ({movie}) => (
    <Link to={`/${movie.id}`}>
        <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
    </Link>
);


//This will make sure title will be string
//isRequired means it will be needed like (!)
//static only works on class

// static propTypes = {
//     movie: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//     }),
// };

//Define props types for functional stateless component
Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Movie;

export const Poster = styled.img`
    box-shadow: 0 0 35px black;
`;
