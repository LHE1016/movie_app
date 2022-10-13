import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './Movie.css';


function Movie(props) {
    // console.log(props);
    const {genres,id,poster,summary,title,year} = props;
  return (
    <div className='movie'>
        <Link to= {'/detail'} state={props}>
        <img src={poster} alt={title} title={title} />
        <div className='movie_data'>
            <h3 className='movie_title'>{title}</h3>
            <h4 className='movie_year'>{year}</h4>
            <ul className='movie_genres'>
                {genres.map((genre, index) => {
                return (
                    <li className='movie_genre' key={index}>{genre}</li>
                    )
                })}
            </ul>
            <p className='movie_summary'>{summary.slice(0,180)} ...</p>
        </div>
        </Link>
    </div>
  )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
                    // arrayOf: 문자열을 원소로 갖는 배열
}

export default Movie

// npm install prop-types