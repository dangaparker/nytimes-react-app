import React, { Component } from 'react'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import '../app.css';
import styled, {createGlobalStyle} from 'styled-components'


import NYTimesLogo from '../assets/images/ny-times.png'


import TopStories from './top_story_page';

const ROOT_URL = "https://api.nytimes.com/svc/topstories/v2"
const API_KEY = "e8c448d58e55459b80b909578b959737"


const Logo = styled.img`
    width: 7%;
    margin: 1em;
`

const Container = styled.div` 
    display: flex;
    justify-content: center;
    flex-flow: column;
`

const Title = styled.h2`
    margin-top: 1em;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    justify-content: center;`


const DropHeaderContainer = styled.div`
    display: flex;
    margin-top: 1.2em;`

const DropHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10em;
    border: gray 1px solid;
    padding: .5em;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
        &:hover{
    background-color: lightgrey
};
`

const DropList = styled.ul`
    list-style: none;
    height: 14em;
    overflow-y: scroll;
    margin-top: .2em;
    border: 1px solid gray;
    border-radius: 5px; 
    padding: 0.3em .5em;
    `

const StyledLink = styled(Link)`
    border: gray solid 1px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    &:hover{
        background-color: lightgray;
        cursor: pointer;
    }`

const GoBtn = styled.p`
    text-decoration: none;
    color: black;
    font-size: 1em;
    border: none;
    padding: 0 .4em;
`



class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            hasSelected: false,
            selectedCategory: '',
            showMenu: false,
            searchTerm: 'Category',
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
        this.setState({ 
            showMenu: false, 
            searchTerm: term,
        })
        this.setState((state) => ({ selectedCategory: term }))
        
    }
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm === '') {
            return;
        }
    }

    render() {
        const categoryArray = ["home", "world", "national", "politics", "upshot", "opinion",
            "business", "technology", "science", "health", "sports", "arts", "books", "movies", 
            "theater", "food", "travel", "realestate", "automobiles", "obituaries", "insider"]

        const listCategories = categoryArray.map((term, index) => {
            return (
                <li key={index} className="dd-list-item" onClick={this.handleClick.bind(this, term)}>{term}</li>
            )
        })

        return (
            <Container>
                <Logo className="nyt-logo" src={NYTimesLogo} alt="" />
                <div className="title-container">
                    <Title>New York Times Top Stories</Title>
                </div>
                <Form className={this.state.hasSelected ? 'hide' : 'show'} onSubmit={this.handleSubmit.bind(this)}>
                    <div className="drop-down-container">
                        <DropHeaderContainer>
                            <DropHeader onClick={this.showMenu}>
                                <div>{this.state.searchTerm}</div>
                                <i className={this.state.showMenu ? 'material-icons arrow-down' : "material-icons"}>
                                    arrow_drop_down</i>
                            </DropHeader>
                            <StyledLink to={`topstories/${this.state.searchTerm}`}><GoBtn className="go-btn">go</GoBtn></StyledLink>
                        </DropHeaderContainer>

                        {this.state.showMenu ? (
                            <DropList>
                            {listCategories}</DropList>)
                            : null}
                    </div>
                </Form>
            </Container>
        )
    }
}

export default HomePage