import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default class Header extends Component{
    render(){
        return(     
                <nav className="navbar sticky-top navbar-dark bg-dark">
                    <a className="logo navbar-brand" href="/" style={{"color":"darkorange"}}>Jobz</a>
                    <ul className="navbar-nav">
                    <div className="external">
                    <li className="nav-item">
                    <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/user">User</Link>
                    </li>
                    <li className="nav-item">
                    <Link className=" nav-link" to="/post">Post</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/notes">Notes</Link>
                    </li>
                    </div>
                    </ul>
                    </nav>  
          
        )
    }
}
