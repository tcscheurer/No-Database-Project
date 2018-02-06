import React from 'react';
import '../styles/Landing.css';
import {Link} from 'react-router-dom';


const Landing = (props)=> {
    return (
        <div className="landingWrapper">
            <h1 className="landingTitle"> Welcome to Jobz! </h1>
            <p className="lead">Search GitHub's database of job postings.</p>
            <Link to="/search">
            <button type="submit" className="cstm-landing-btn btn btn-lg btn-primary">
            Search Now
            </button><br/><br/>
            </Link>
        </div>

    )
}

export default Landing;