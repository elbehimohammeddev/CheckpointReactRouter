import React from 'react'
import { Search } from './Search';
import back from '../Home.jpg';
import { Link } from "react-router-dom";

const Description = (props) => {
    return (    
        <div>
          
            <Search/>
            <Link to="/"><img src={back} className="image" style={{width:"100px"}} alt="gfdg"/></Link> 
            <h1 className="titleT">{props.location.Props.name}</h1>
            <p className="descT">{props.location.Props.description}</p>
            </div>
    )
}

export default Description