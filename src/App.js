import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BooksList from './BooksList'

class BooksApp extends React.Component {

  state = {
    books: [],
    searchBooksResult: []
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })
  }

  resetBookSearch = () => {
    this.setState({
      searchBooksResult: []
    })
  }

  searchBook = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((result) => {
        if (!result.error) {
          this.setState({
            searchBooksResult: result
          })
        } else {
          this.setState({
            searchBooksResult: []
          })
        }
      })
    } else {
      this.setState({
        searchBooksResult: []
      })
    }
  }

  render() {

    const {books, searchBooksResult} = this.state;

    return (
        <div className="app">
          <Route path='/search' render={() => (
              <SearchBooks books={books} searchResult={searchBooksResult} onChangeShelf={this.updateBook}
                           searchBook={this.searchBook}
                           resetBooksSearch={this.resetBookSearch}/>)}/>
          <Route exact path='/' render={() => (<BooksList books={books} onChangeShelf={this.updateBook}/>)}/>
        </div>
    )
  }
}

export default BooksApp
