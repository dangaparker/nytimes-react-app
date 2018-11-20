import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ROOT_URL = "https://api.nytimes.com/svc/topstories/v2"
const API_KEY = "e8c448d58e55459b80b909578b959737"

class TopStory extends Component {
    constructor(props){
        super(props)

        this.state= {data: {}}
        
    }
    

    async selectCategory(term) {
        const resp = await axios.get(`${ROOT_URL}/${term}.json?api-key=${API_KEY}`)
        console.log(resp)
        this.renderNewPage(resp)
    }

    renderNewPage(){
        
    }

    render() {
        return (
            <div>
                <li><Link onClick={this.selectCategory.bind(this, this.props.item)} to={`/topstories`}>{this.props.item}</Link></li>
            </div>
        )
    }
}

export default TopStory