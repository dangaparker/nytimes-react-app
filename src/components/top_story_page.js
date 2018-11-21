import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ROOT_URL = "https://api.nytimes.com/svc/topstories/v2"
const API_KEY = "e8c448d58e55459b80b909578b959737"

class TopStories extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log('propppp', this.props.data[0])
        if(!this.props.data[0]){
            return <h1>loading</h1>
        }
        return (
            <div>
                <h1>{this.props.data[0].section}</h1>
            </div>
        )
    }
}

export default TopStories