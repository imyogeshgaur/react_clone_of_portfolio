import React from 'react'
import { NavLink } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Portfolio from '../Components/Portfolio';
import Blog from '../Components/Blog';
const Navbar = () => {
    return (
        <>
            <header class="header" id="navbar-collapse-toggle">
                <ul class="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
                    <li class="icon-box">
                        <i class="fa fa-home"></i>
                        <NavLink to={Home}>
                            <h2>Home</h2>
                        </NavLink>
                    </li>
                    <li class="icon-box active">
                        <i class="fa fa-user"></i>
                        <NavLink to={About}>
                            <h2>About</h2>
                        </NavLink>
                    </li>
                    <li class="icon-box">
                        <i class="fa fa-briefcase"></i>
                        <NavLink to={Portfolio}>
                            <h2>Portfolio</h2>
                        </NavLink>
                    </li>
                    <li class="icon-box">
                        <i class="fa fa-envelope-open"></i>
                        <NavLink to={Contact}>
                            <h2>Contact</h2>
                        </NavLink>
                    </li>
                    <li class="icon-box">
                        <i class="fa fa-comments"></i>
                        <NavLink to={Blog}>
                            <h2>Blog</h2>
                        </NavLink>
                    </li>
                </ul>
                <nav role="navigation" class="d-block d-lg-none">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul class="list-unstyled" id="menu">
                            <li><NavLink to={Home}><i class="fa fa-home"></i><span>Home</span></NavLink></li>
                            <li class="active"><NavLink to={About}><i class="fa fa-user"></i><span>About</span></NavLink></li>
                            <li><NavLink to={Portfolio}><i class="fa fa-folder-open"></i><span>Portfolio</span></NavLink></li>
                            <li><NavLink to={Contact}><i class="fa fa-envelope-open"></i><span>Contact</span></NavLink></li>
                            <li><NavLink to={Blog}><i class="fa fa-comments"></i><span>Blog</span></NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
