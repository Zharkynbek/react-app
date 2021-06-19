import React, { Component } from "react"

class AuthorBook extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        console.log("cdm");
        const id = Number(this.props.match.params.authorId);
        const {books} = this.props.authors.find(author => author.id === id)
        console.log(books);

        this.setState({books})
    }

    componentDidUpdate() {
        console.log("cdupdate");
            console.log(Number(this.props.match.params.authorId));
        console.log(this.props.authors);
    }
    render() {
        return <>
            <h1>Component of books from author</h1>
            <ul>{this.state.books.map(book => <li key={book.id}>{ book.title}</li>)}</ul>
            </>
    }
}

export default AuthorBook