import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from "./Book";

class Shelf extends Component {

  render() {

    const {title, books, onChangeCategory} = this.props;

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                  <Book key={book.id} book={book} shelf={book.shelf} onChangeCategory={onChangeCategory}/>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
}

export default Shelf