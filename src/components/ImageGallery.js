import React, { Component } from 'react';
import { Oval } from 'react-loader-spinner';

import Button from './Button';
import ImageGalleryItem from './ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loader: false,
    modal: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { page } = this.state;
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '32799595-4883f30010edd47462b21129f';
    const config = '&image_type=photo&orientation=horizontal&per_page=3';
    const prevText = prevProps.searchText;
    const currentText = this.props.searchText;

    if (prevText !== currentText || prevState.page !== page) {
      this.setState({ loader: true });
      fetch(`${BASE_URL}?q=${currentText}&page=${page}&key=${KEY}${config}`)
        .then(resp => resp.json())
        .then(({ hits }) =>
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            loader: false,
          }))
        );
    }
  };

  handleButtonClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  find = e => {
    const a = e.target;
    this.revers();
    console.log(a);
  };

  revers = () => {
    this.setState(({ modal }) => !modal);
  };

  render() {
    const { handleButtonClick } = this;
    const { images, loader } = this.state;
    return (
      <ul className="gallery">
        {images.length > 0 &&
          images.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                smalImg={webformatURL}
                bigImg={largeImageURL}
                onFind={this.find}
                showModal={this.state.modal}
              />
            );
          })}
        <Oval
          height={40}
          width={40}
          color="#3f51b5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loader}
          ariaLabel="oval-loading"
          secondaryColor="#3f51b5"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        {images.length > 0 && <Button onClick={handleButtonClick} />}
      </ul>
    );
  }
}

export default ImageGallery;
