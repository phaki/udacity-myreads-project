import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Shelf from "./Shelf";

class BooksList extends Component {

  render() {

    const {books, onChangeShelf} = this.props;

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf title='Currently reading' books={books.filter((book) => (book.shelf === 'currentlyReading'))}
                     onChangeCategory={onChangeShelf}/>
              <Shelf title='Want to read' books={books.filter((book) => (book.shelf === 'wantToRead'))}
                     onChangeCategory={onChangeShelf}/>
              <Shelf title='Read' books={books.filter((book) => (book.shelf === 'read'))}
                     onChangeCategory={onChangeShelf}/>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
    )
  }
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default BooksList