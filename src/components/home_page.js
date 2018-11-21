import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../app.css';

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
            showMenu: false
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
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    handleClick(term) {
        this.setState((state) => ({ selectedCategory: term }))
    }
    handleSubmit = async event => {
        event.preventDefault();
        const category = this.state.selectedCategory
        const response = await axios.get(`${ROOT_URL}/${category}.json?api-key=${API_KEY}`)
        const data = response.data.results;
        this.setState({ data })
        this.setState({ hasSelected: true })

    }
    componentDidMount() {
        console.log('hello')
    }

    toggleList() {
        console.log('switch')
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }))
    }


    render() {
        console.log('cat', this.state.selectedCategory)
        const categoryArray = ["home", "opinion", "world", "national", "politics", "upshot", "nyregion",
            "business", "technology", "science", "health", "sports", "arts", "books", "movies", "theater", "sundayreview",
            "fashion", "tmagazine", "food", "travel", "magazine", "realestate", "automobiles", "obituaries", "insider"]


        const listCategories = categoryArray.map((term, index) => {
            return (
                <li key={index} className="dd-list-item" onClick={this.handleClick.bind(this, term)}>{term}</li>

            )
        })

        return (
            <div className='container'>
                <h3>NY Times Articles</h3>
                <form className={this.state.hasSelected ? 'hide' : 'show form'} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="menu-container">
                        <div className="drop-down-container">
                            <div className="header-container">
                                <div className="dd-header" onClick={this.showMenu}>

                                    <div className="dd-title">Category</div>

                                    <i className="material-icons">
                                        arrow_drop_down</i>

                                </div>
                                <button className="go-btn">go</button>
                            </div>

                            {this.state.showMenu ? (
                                <ul className="dd-list" ref={(element) => {
                                    this.dropdownMenu = element
                                }}>{listCategories}</ul>)
                                : null}

                        </div>


                    </div>
                </form>
                <div className={this.state.hasSelected ? 'show' : 'hide'}>
                    <TopStories data={this.state.data} />
                </div>

            </div>
        )
    }
}

export default HomePage