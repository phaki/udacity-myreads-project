import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import SearchResult from "./SearchResult";

class SearchBooks extends Component {

  componentDidMount() {
    this.props.resetBooksSearch()
  }

  render() {

    const {books, searchResult, searchBook, onChangeShelf} = this.props;

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"
                     onChange={(event) => searchBook(event.target.value)}/>

            </div>
          </div>
          <SearchResult result={searchResult} books={books} onChangeShelf={onChangeShelf}/>
        </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  searchResult: PropTypes.array.isRequired,
  searchBook: PropTypes.func.isRequired,
  resetBooksSearch: PropTypes.func.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default SearchBooks