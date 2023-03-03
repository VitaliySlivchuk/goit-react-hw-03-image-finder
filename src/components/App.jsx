import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';

import Searchbar from './Searchbar';

export default class App extends Component {
  state = {
    searchText: '',
  };

  handleSubmit = text => {
    this.setState({ searchText: text });
  };

  render() {
    const { handleSubmit } = this;
    const { searchText } = this.state;
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery searchText={searchText} />

        <ToastContainer />
      </>
    );
  }
}
