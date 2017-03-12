import React, { Component } from 'react'
import loadImage from 'blueimp-load-image'

class AutoRotateImage extends Component {
  loadImage() {
    const url = this.props.src;
    const maxWidth = this.props.width;
    const maxHeight = this.props.height;
    loadImage(
      url,
      (img) => {
        if(img.type === "error") {
          console.log("Error loading image " + url);
        } else {
          this.refs.container.appendChild(img);
        }
      },
      {
        orientation: true,
        maxWidth,
        maxHeight
      }
    ); 
  }
  
  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate() {
    this.refs.container.removeChild(this.refs.container.firstChild);
    this.loadImage();
  }
  
  render() {
    const { src } = this.props;
    return (
      <div ref="container" />
    );
  }
}

export default AutoRotateImage;
