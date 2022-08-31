import React from 'react'
import img from "../img/Logonetflix.png"
import { Link } from 'react-router-dom'
import{AiOutlineSearch}from "react-icons/ai"
const Header = () => {
  return (
    <div className='header'>
        <img src={img} alt="" />

        <div>
            <Link to="/tvshows">Tv shows</Link>
            <Link to="/tvshows">Movies</Link>
            <Link to="/tvshows">Recently Added</Link>
            <Link to="/tvshows">My List</Link>
        </div>
        <AiOutlineSearch/>
    </div>
  )
}

export default Header