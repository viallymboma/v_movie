import React from 'react';
import { Link } from 'react-router-dom';
import { OulineButton } from '../components/buttons/Button';

import HeroSlide from '../components/hero_slide/HeroSlide';
import MovieList from '../components/movies_list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

// import apiConfig from '../api/apiConfig';

function Home() {
    return (
        <>
            <HeroSlide />

            <div className='container'>
                <div className='section mb_3'>
                    <div className='section__header mb_2'>
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OulineButton className="small">view more</OulineButton>
                        </Link>
                    </div>
                    <MovieList category={ category.movie } type={ movieType.popular } />
                </div>

                <div className='section mb_3'>
                    <div className='section__header mb_2'>
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OulineButton className="small">view more</OulineButton>
                        </Link>
                    </div>
                    <MovieList category={ category.movie } type={ movieType.top_rated } />
                </div>

                <div className='section mb_3'>
                    <div className='section__header mb_2'>
                        <h2>Up Coming Movies</h2>
                        <Link to="/movie">
                            <OulineButton className="small">view more</OulineButton>
                        </Link>
                    </div>
                    <MovieList category={ category.movie } type={ movieType.upcoming } />
                </div>

                {/* <div className='section mb_3'>
                    <div className='section__header mb_2'>
                        <h2>Popular TV</h2>
                        <Link to="/movie">
                            <OulineButton className="small">view more</OulineButton>
                        </Link>
                    </div>
                    <MovieList category={ category.tv } type={ tvType.popular } />
                </div> */}

                <div className='section mb_3'>
                    <div className='section__header mb_2'>
                        <h2>Top Rated TV</h2>
                        <Link to="/movie">
                            <OulineButton className="small">view more</OulineButton>
                        </Link>
                    </div>
                    <MovieList category={ category.tv } type={ tvType.top_rated } />
                </div>

                <div className='section mb_3'>
                    <div className='section__header mb_2'>
                        <h2>On Air TV</h2>
                        <Link to="/movie">
                            <OulineButton className="small">view more</OulineButton>
                        </Link>
                    </div>
                    <MovieList category={ category.tv } type={ tvType.on_the_air } />
                </div>

            </div>
        </>
    )
}

export default Home
