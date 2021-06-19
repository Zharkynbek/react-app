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
    }

    async componentDidMount() {
    const {bookId} = this.props.match.params
        const response = await Axios.get(`http://localhost:4040/books/${bookId}`)
        console.log(response.data.descr);  

        this.setState({...response.data})
    }

    render() {
        const {imgUrl, title, genre, descr} = this.state
        return (
            <>
                <h1>Page of one book {this.props.match.params.bookId}</h1>
                <h2>Title: {title}</h2>
                <h3>Genre: {genre}</h3>
                <img src={imgUrl} alt="" />
                <p>{ descr}</p>
                </>
        )
    }
}

export default BookDetailsView