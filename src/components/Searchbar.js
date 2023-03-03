import React, { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value.toLowerCase();
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.searchText.trim() === '') {
      toast('No data');
      return;
    }

    this.props.onSubmit(this.state.searchText);

    this.setState({ searchText: '' });
  };

  render() {
    const { searchText } = this.state;
    const { handleChange, handleFormSubmit } = this;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={handleFormSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchText"
            value={searchText}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
