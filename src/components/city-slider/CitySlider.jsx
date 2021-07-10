import React from "react";
import "./citySlider.styles.scss";
import { slides, SliderData } from "../../pages/HomePage/SliderData";
import classNames from "classnames";

class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);
    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = {
      activeSlide: -1,
      prevSlide: -1,
      sliderReady: false,
      collection: SliderData,
    };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.state.collection;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady, collection } = this.state;
    console.log(collection);
    return (
      <div className={classNames("slider", { "s--ready": sliderReady })}>
        {/* <p className="slider__top-heading">Sunny International</p> */}
        <div className="slider__slides">
          {collection.map((slide, index) => (
            <div
              className={classNames("slider__slide", {
                "s--active": activeSlide === index,
                "s--prev": prevSlide === index,
              })}
              key={slide.title}
            >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">
                  {slide.subTitle || slide.title}
                </h3>
                <h2 className="slider__slide-heading">
                  {slide.title.split("").map((l) => (
                    <span>{l}</span>
                  ))}
                </h2>
                <p className="slider__slide-readmore">read more</p>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.img})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="slider__control"
          onClick={() => this.changeSlides(-1)}
        />
        <div
          className="slider__control slider__control--right"
          onClick={() => this.changeSlides(1)}
        />
      </div>
    );
  }
}

//   ReactDOM.render(<CitiesSlider slides={slides} />, document.querySelector('#app'));

export default CitiesSlider;
