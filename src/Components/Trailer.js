import React from 'react'
import { Search } from './Search';
import { Link } from "react-router-dom";
import back from '../Home.jpg';


function Trailer(props) {

    return (
        <div>
           
        <Search/>
        <Link to="/"><img src={back} style={{width:"100px"}} className="image" alt="vdf"/></Link> 
        <h1 className="titleT">{props.location.Props.name}</h1>
        <iframe width="560" height="315"  src="https://www.youtube.com/watch?v=5KSVsMv_7sQY" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
        </div>
    )
}

export default Trailer