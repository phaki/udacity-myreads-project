import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  render() {

    const {book, onChangeCategory, shelf} = this.props

    return (
        <div className="book">
          <div className="book-top">
            {book.imageLinks && (
                <img src={book.imageLinks.thumbnail} alt='book cover'/>
            )}

            <div className="book-shelf-changer">
              <select value={shelf} onChange={(event) => {
                onChangeCategory(book, event.target.value)
              }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && (book.authors.map((author) => (
              <p key={author}>{author}</p>
          )))}
          </div>
        </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
}

export default Book