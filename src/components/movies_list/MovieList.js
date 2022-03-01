import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import Button from '../buttons/Button';

import tmdbApi, { category } from '../../api/tmdbApi';

import apiConfig from '../../api/apiConfig';

import MovieCard from '../movie_card/MovieCard';
// import axios from 'axios';


const MovieList = props => {

    const [items, setItmes] = useState([]);

    useEffect (() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});;
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }

            setItmes(response.results)
        }
        getList ();
    }, [])

    return (
        <div className='movie_list'>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => {
                        return (
                            <SwiperSlide className='swiper_slide' key={i}>
                                {/* <img src={apiConfig.w500Image(item.poster_path)} alt='' /> */}
                                <MovieCard item={item} category={props.category} />

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default MovieList
