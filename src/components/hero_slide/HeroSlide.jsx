import React, { useEffect, useState, useRef } from 'react';

import { useNavigate } from "react-router-dom";

import SwipeCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';

import apiConfig from '../../api/apiConfig';

import Button, { OulineButton, OulineALink, ALink } from "../buttons/Button";

import Modal, { ModalContent } from "../modal/Modal"

const HeroSlide = () => {

    SwipeCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect (() => {
        const getMovies = async () => {
            const params = {page: 1}

            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 4));
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }

        getMovies();
    }, [])

    return (
        <div className='hero_slide'>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{delay: 10000}}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                // <img src={apiConfig.orginalImage(item.backdrop_path)} />
                                <HeroSlideItem item={item} className={`${isActive ? 'active': ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }

            </Swiper>

            {
                movieItems.map((item, i) => <TrainllerModal key={i} item={item} />)
            }
        </div>
    )
}

const HeroSlideItem = props => {

    let history = useNavigate();

    const item = props.item;

    // const test = apiConfig.orginalImage(item.backdrop_path)
    // console.log(test)

    let thatImage = null;

    if (item.backdrop_path) {
        thatImage = apiConfig.orginalImage(item.backdrop_path)
    } else {
        thatImage = apiConfig.orginalImage(item.poster_path)
    }

    console.log(apiConfig.w500Image(item.poster_path))

    const background = thatImage
    // let theVideo = null

    // Getting the trailler setup in the Iframe
    // on click of trailler button, the following method will 
    // be executed and display trailer inside iframe
    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        const ifr = document.querySelector(".myIframe")
        console.log(ifr)

        const videos = await tmdbApi.getVideos(category.movie, item.id)

        // theVideo = await tmdbApi.getVideos(category.movie, item.id)

        if (videos.results.length > 0) {
            const videoSource = `//www.youtube.com/embed/${videos.results[0].key}?autoplay=0`;
            // const videoSource = `https://www.youtube.com/embed/6lH-6Y805L4`
            console.log(modal.querySelector('.myIframe'));

            // modal.querySelector('.myIframe').setAttribute('src', videoSource);
            ifr.setAttribute('src', videoSource);
            // try {
                
            //     modal.querySelector('.myIframe').setAttribute('src', videoSource);
            // } catch (error) {
            //     console.log(error)
            // }
        } else {
            modal.querySelector('.modal__content').innerHTML = "No trailer";
        }
        modal.classList.toggle('active');
    }

    let videoSource = null
    const retunVideoLink = async () => {

        const videos = await tmdbApi.getVideos(category.movie, item.id)

        if (videos.results.length > 0) {
            videoSource = `https://www.youtube.com/embed/${videos.results[0].key}`;
        }

        console.log(videoSource)

        // return videoSource;
    }
    console.log(videoSource)

    const clickLink = () => {
        retunVideoLink ()
    }

    // console.log(theVideo)

    return (
        <div 
            className={`hero_slide__item ${props.className}`} 
            style={{backgroundImage: `url(${background})`}}>
            {/* {item.title} */}
            <div className='hero_slide__item__content container'>
                <div className='hero_slide__item__content__info'>
                    <h2 className='title'>{item.title}</h2>
                    <div className='overview'>{item.overview}</div>
                    <div className='btns'>
                        {/* history.replace */}
                        <Button onClick={() => history.replace(`/movie/${item.id}`)}>
                            Watch Now
                        </Button>
                        {/* <OulineButton>
                            <a href={retunVideoLink}> Watch trailer </a> 
                        </OulineButton> */}
                        <a href="/" className={`btn btn-outline`} >
                            Watch trailer
                        </a>
                    </div>
                </div>
                <div className='hero_slide__item__content__poster'>
                    <img src={apiConfig.w500Image(item.poster_path)} alt={apiConfig.w500Image(item.poster_path)} />
                </div>
            </div>
        </div>
    )
}


const TrainllerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClick={onClose} className="modal__content">
                <iframe 
                    ref={iframeRef} 
                    className='myIframe' 
                    width="100%" 
                    height="500px" 
                    title="trailer" 
                    allowFullScreen
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    ></iframe>
                {/* <iframe width="560" className='myIframe'  height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </ModalContent>

        </Modal>
    )
}

export default HeroSlide;






