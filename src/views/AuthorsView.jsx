import React, { Component } from "react"
import Axios from "axios"
import {NavLink, Route} from "react-router-dom"
import AuthorBook from "../components/AuthorBook"

class AuthorsView extends Component {
    state = {
        authors: [],
    }

    async componentDidMount() {
        const response = await Axios.get('http://localhost:4040/authors?_embed=books')

        this.setState({authors: response.data})
    }

    render() {
        const {match} = this.props
        return (
        <>
                <h1>This is page from all authors</h1>
                <ul>
                    {this.state.authors.map(author => (
                        <li key={author.id}>
                            <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink></li>
                    ))}
                </ul>
                <Route
                    path={`${match.path}/:authorId`}
                    render={props => {
                        return <AuthorBook {...props} authors={this.state.authors} />
                    }}
                />
                </>
    )}
}

export default AuthorsView;