import React, { Component } from "react"
import Axios from "axios"
import {Link} from "react-router-dom"

class BooksView extends Component {
    state = {
        books: [],
    }

    async componentDidMount() {
        const response = await Axios.get('http://localhost:4040/books')
        console.log(response.data);  

        this.setState({books: response.data})
    }
    render() {
        return (
          <>
            <h1>This is books</h1>
            <ul>
              {this.state.books.map((book) => (
                <li key={book.id}>
                  <Link
                    to={{
                      pathname: `${this.props.match.url}/${book.id}`,
                    }}
                  >
                    {book.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        );}
}

export default BooksView;