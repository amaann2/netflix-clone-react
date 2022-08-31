import React from 'react'
import ".././Home.scss"
import cover from "../img/download.jpg"
import axios from "axios"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import {AiOutlinePlus,AiFillPlayCircle} from "react-icons/ai"

const upcoming = "upcoming"
const nowplaying = "now_playing"
const popular = "popular"
const toprated = "top_rated"

const apikey = "5f584297365026e5c3fc03a10a0ecc9d"
const url = "https://api.themoviedb.org/3"
const imgurl = "https://image.tmdb.org/t/p/original"


const Card = ({ img }) => (
  <img className='card' src={img} alt="cover" />
)
const Rows = ({ title, arr = [] }) => (

  <div className='row'>
    <h2> {title} </h2>
    <div>
      {
        arr.map((item, index) => (
          <Card key={index} img={`${imgurl}/${item.poster_path}`} />
        ))
      }


    </div>

  </div>

)
const Home = () => {
  const [upcomingmovie, setUpcomingmovie] = useState([])
  const [popularmovie, setpopularmovie] = useState([])
  const [topratedmovie, settopratedmovie] = useState([])
  const [nowplayingmovie, setnowplayingmovie] = useState([])
  const [genre, setgenre] = useState([])
  useEffect(() => {
    const fetchupcoming = async () => {
      const { data: { results } } = await axios.get(` ${url}/movie/${upcoming}?api_key=${apikey}`)
      setUpcomingmovie(results)
    };
    const fetchnowplaying = async () => {
      const { data: { results } } = await axios.get(` ${url}/movie/${nowplaying}?api_key=${apikey}`)
      setnowplayingmovie(results)
    };
    const fetchpopular = async () => {
      const { data: { results } } = await axios.get(` ${url}/movie/${popular}?api_key=${apikey}`)
      setpopularmovie(results)
    };
    const fetchtoprated = async () => {
      const { data: { results } } = await axios.get(` ${url}/movie/${toprated}?api_key=${apikey}`)
      settopratedmovie(results)
    };
    const fetchallgenre = async () => {
      //https://api.themoviedb.org/3/genre/movie/list?api_key=5f584297365026e5c3fc03a10a0ecc9d&language=en-US&page=1
      const { data: { genres } } = await axios.get(` ${url}/genre/movie/list?api_key=${apikey}`)
      setgenre(genres)
    };
    fetchallgenre();
    fetchupcoming()
    fetchnowplaying()
    fetchpopular()
    fetchtoprated()
  }, [])

  return (
    <section className='home'>
      <div className="banner" style={{
        backgroundImage: popularmovie[1] ? `url(${`${imgurl}/${popularmovie[1].poster_path}`})` : "rgb(16,16,16)"
      }}>
        {
          popularmovie[1] &&
          (
            <h1>{popularmovie[1].original_title}</h1>

          )
        }
        {
          popularmovie[1] &&
          (
            <p>{popularmovie[0].overview}</p>

          )
        }
        <div>
        <button><AiFillPlayCircle/> play</button>

        <button>My list <AiOutlinePlus/></button>
        </div>
      </div>

      <Rows title="Upcoming movie on  Netflix" arr={upcomingmovie} />
      <Rows title="Now playing movie on  Netflix" arr={nowplayingmovie} />
      <Rows title="Popular movie on  Netflix" arr={popularmovie} />
      <Rows title="Top Rated movie on  Netflix" arr={topratedmovie} />
      <div className="genrebox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
        ))}
      </div>


    </section>
  )
}

export default Home