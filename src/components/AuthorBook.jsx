  
import React from 'react';
import { Link } from 'react-router-dom';

const AuthorBooks = ({ books }) => {
    return (
        <>
      <h3>books from this author</h3>
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </li>
      ))}
            </ul>
            </>
  );
};

export default AuthorBooks;

// ======================================================================

// import React, { Component } from "react"

// class AuthorBook extends Component {
//     state = {
//         books: []
//     }

//     componentDidMount() {
        
//         const id = Number(this.props.match.params.authorId);
//         const {books} = this.props.authors.find(author => author.id === id)
        

//         this.setState({books})
//     }

//     componentDidUpdate() {
//             console.log(Number(this.props.match.params.authorId));
//     }
//     render() {
//         return <>
//             <h1>Component of books from author</h1>
//             <ul>{this.state.books.map(book => <li key={book.id}>{ book.title}</li>)}</ul>
//             </>
//     }
// }

// export default AuthorBook