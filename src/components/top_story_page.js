import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import newspaper from '../assets/images/newspaper.jpg'

const ROOT_URL = "https://api.nytimes.com/svc/topstories/v2"
const API_KEY = "e8c448d58e55459b80b909578b959737"



class TopStories extends Component {
    constructor(props) {
        super(props)

        this.state = { data: {} }
    }

    async componentDidMount() {
        const term = this.props.match.params.term;
        const response = await axios.get(`${ROOT_URL}/${term}.json?api-key=${API_KEY}`)
        const data = response.data.results;
        this.setState({ data })
    }

    navigateBack(){
        this.props.history.goBack();
    }

    render() {
        if (!this.state.data[0]) {
            return <h1>loading...</h1>
        }

        const headlines = this.state.data.map((story, index) => {
        
            return (
                <div key={index}>
                    <div className="headline-content">
                        <img src={story.multimedia[0] ? story.multimedia[0].url : newspaper} />
                        <a target="_blank" href={story.url}><h4>{story.title}</h4></a>
                        <h5>- {story.byline}</h5>
                    </div>
                    <hr />
                </div>
            )
        })



        return (
            <div className="headlines-container">
                <div className="back-to-search">
                    <i className="material-icons" onClick={this.navigateBack.bind(this)}>
                        arrow_back</i>
                </div>
                <div className="category-title">
                    <h1>{this.state.data[0].section}</h1>
                </div>
                
                <div className="headlines-section">
                    {headlines}
                </div>
            </div>
        )
    }
}

export default TopStories