import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import '../app.css';

import TopStory from './top_story_page';

const ROOT_URL = "https://api.nytimes.com/svc/topstories/v2"
const API_KEY = "e8c448d58e55459b80b909578b959737"


class HomePage extends Component {
    constructor(props){
        super(props)

        this.state={
            data: {},
            hasSelected: false,
            selectedCategory: ''

        }
    }

    async selectCategory(term) {
        const resp = await axios.get(`${ROOT_URL}/${term}.json?api-key=${API_KEY}`)
        console.log(resp)
        await this.setState({data: resp.data.results})
        this.setState({hasSelected: true})
        this.setState({selectCategory: term})
        console.log(this.state.data[1].section)
    }

    render() {

        const post = this.state.data 
        if(post ==={}){
            return <div>Loading...</div>
        }

        const categoryArray = ["home", "opinion", "world", "national", "politics", "upshot", "nyregion",
                "business", "technology", "science", "health", "sports", "arts", "books", "movies", "theater", "sundayreview",
                "fashion", "tmagazine", "food", "travel", "magazine", "realestate", "automobiles", "obituaries", "insider"]
    
        
        const listCategories = categoryArray.map((item, index) => {
            return (
                <ul key={index} >
                    <li><Link onClick={this.selectCategory.bind(this, item)} to={`/`}>{item}</Link></li>
                </ul>
                    
            )
        })

        return (
            <div>
                <div className={this.state.hasSelected===true ? 'hide' : 'show'}>{listCategories}</div>
                <div className={this.state.hasSelected===false ? 'hide' : 'show'}>
                        <h1>{this.state.data[1].section}</h1>
                </div>
            </div>
        )
    }
}

export default HomePage