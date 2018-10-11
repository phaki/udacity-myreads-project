import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from "./Book";

class SearchResult extends Component {

  getShelf = (book) => {
    var shelf = 'none';

    const foundBook = this.props.books.find((b) => (
        b.id === book.id
    ))

    if (foundBook) {
      shelf = foundBook.shelf
    }

    return shelf;
  }

  render() {

    const {result, onChangeShelf} = this.props;

    return (
        <div className="search-books-results">
          <ol className="books-grid">
            {result.map((book) => (
                <Book key={book.id} book={book} shelf={this.getShelf(book)}
                      onChangeCategory={onChangeShelf}/>))}
          </ol>
        </div>
    )
  }
}

SearchResult.propTypes = {
  books: PropTypes.array.isRequired,
  result: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default SearchResult