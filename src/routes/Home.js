import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends Component {

  state = {
    isLoading: true,
    movies: [],
  }

  // axios는 async, await 필요
  getMovies = async () => {
    const {
      data:{
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
                  // get방식과 post방식이 있음                 json뒤에 ?로 조건을 달 수 있음
    console.log(movies);
    this.setState({isLoading:false, movies:movies})
                                    // 키와 키값이 동일하면 movies라고 하나만 적어줘도 됨
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // },6000);
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (

      <section className='container'>
        {isLoading ? 
          (<div className='loader'>
            <span className='loader_text'>'Loading...'</span>
          </div>)
         : 
          (<div className='movies'>
            {movies.map( (movie,index) => (<Movie
                                key={index}  // 모든 컴포넌트에는 고유 키값이 있어야 함
                                id={movie.id}
                                // key = {객체.데이터종류}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                              />))}
          </div>)
        }
      </section>

    )
  }
}

export default Home;
