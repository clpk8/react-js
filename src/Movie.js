import React from 'react';
import PropTypes from 'prop-types';
//Rules:
//Should have a proptype for every single prop that have used in component
//alwast let it either be isRequired or default props.


//Functional stateless components: Anytime if you are not using states, refs, or life cycle methods.

const Movie = ({movie}) => (
    <div>
        <h3>{movie.title} </h3>
    </div>
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
