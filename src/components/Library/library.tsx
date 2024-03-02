import React, { Component } from "react";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import bookImage from '../../assets/book.png';
import './library.css'; 

class Library extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 4,
    showNavigation: false,
    config: config.gentle,
    hoveredIndex: -1
  };

  handleMouseEnter(index) {
    this.setState({ hoveredIndex: index });
  }

  handleMouseLeave() {
    this.setState({ hoveredIndex: -1 });
  }

  slides = Array.from({ length: 8 }, (_, index) => ({
    key: uuidv4(),
    content: <img src={bookImage} alt="Book" className="book-images" style={{ opacity: this.state.hoveredIndex === index ? 1.1 : 0.8 }} />,
    onClick: () => this.setState({ goToSlide: index })
  }));

  render() {
    return (
      <div className="full-page">
        <div className="library-container">
          <div className="my-library">My Library</div>
        </div>
        <div className="image-containers">
          <div style={{ width: "60%", height: "700px", margin: "0 auto" }}> 
            <Carousel
              slides={this.slides}
              goToSlide={this.state.goToSlide}
              offsetRadius={this.state.offsetRadius}
              showNavigation={this.state.showNavigation}
              animationConfig={this.state.config}
            >
              {/* Render each slide with a className */}
              {this.slides.map((slide, index) => (
                <div key={slide.key} className="carousel-slide" onMouseEnter={() => this.handleMouseEnter(index)} onMouseLeave={() => this.handleMouseLeave()}>
                  {slide.content}
                </div>
              ))}
            </Carousel>
            <div
              style={{
                margin: "0",
                marginTop: "2rem",
                width: "100%",
                display: "flex",
                justifyContent: "space-around"
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
