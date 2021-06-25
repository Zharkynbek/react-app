import React, { Component } from "react"
import Axios from "axios"

class BookDetailsView extends Component {
    state = {
        book: null,
        descr: null,
        genre: null,
        id: null,
        imgUrl: null,
        title: null,
        author: null
    }

    async componentDidMount() {
    const {bookId} = this.props.match.params
        const response = await Axios.get(`http://localhost:4040/books/${bookId}?_expand=author`)
        console.log(response.data.descr);  

        this.setState({...response.data})
    }

    render() {
        const {imgUrl, title, genre, descr} = this.state
        return (
            <>
                <button type="button" onClick={() => this.props.history.push("/books")}>Go Back To Books</button>
                <h1>Page of one book {this.props.match.params.bookId}</h1>
                <h2>Title: {title}</h2>
                <h3>Genre: {genre}</h3>
                <img src={imgUrl} alt="" />
                {this.state.author && <p>Author: { this.state.author.name}</p>}
                <p>{ descr}</p>
                </>
        )
    }
}

export default BookDetailsView