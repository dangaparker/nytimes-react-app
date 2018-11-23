import React, { Component } from 'react'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import '../app.css';
import NYTimesLogo from '../assets/images/ny-times.png'

import TopStories from './top_story_page';

const ROOT_URL = "https://api.nytimes.com/svc/topstories/v2"
const API_KEY = "e8c448d58e55459b80b909578b959737"


class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            hasSelected: false,
            selectedCategory: '',
            showMenu: false,
            title: 'Category'
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        // if (!this.dropdownMenu.contains(event.target)) 
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });


    }

    handleClick(term) {
        this.setState({ showMenu: false })
        this.setState({ title: term })
        this.setState((state) => ({ selectedCategory: term }))
    }
    handleSubmit = event => {
        event.preventDefault();
    }

    render() {


        console.log('data', this.state.data)
        const categoryArray = ["home", "opinion", "world", "national", "politics",
            "business", "technology", "science", "health", "sports", "arts", "books", "movies", "theater",
            "fashion", "food", "travel", "magazine", "realestate", "automobiles", "obituaries", "insider"]


        const listCategories = categoryArray.map((term, index) => {
            return (
                <li key={index} className="dd-list-item" onClick={this.handleClick.bind(this, term)}>{term}</li>

            )
        })

        return (
            <div className='container'>
                    <img className="nyt-logo" src={NYTimesLogo} alt="" />
                <div className="title-container">
                    <h2 className="front-page-title">NY Times Articles</h2>
                </div>
                <form className={this.state.hasSelected ? 'hide' : 'show form'} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="drop-down-container">
                        <div className="header-container">
                            <div className="dd-header" onClick={this.showMenu}>
                                <div className="dd-title">{this.state.title}</div>
                                <i className="material-icons">
                                    arrow_drop_down</i>
                            </div>
                            <Link className="anchor" to={`topstories/${this.state.title}`}><p className="go-btn">go</p></Link>
                        </div>

                        {this.state.showMenu ? (
                            <ul className="dd-list"
                            >{listCategories}</ul>)
                            : null}
                    </div>
                </form>
            </div>
        )
    }
}

export default HomePage