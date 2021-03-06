import React from "react";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();
  const handelClick = () => {
    history.push("/products");
  };
  return (
    <Carousel style={{ margin: "-100px 0 0 0 " }}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 banner-image"
          src="./image/slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="bg-warning p-2 text-black fs-2 fw-bold">
            IT'S STILL MAGIC THOUGH YOU KNOW HOW IT HAS DONE
          </h3>
          <Button
            className="bg-warning px-2 text-black fs-3 fw-bold"
            onClick={() => handelClick()}
          >
            EXPLORE ALL
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 banner-image"
          src="./image/slider2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="bg-warning p-2 text-black fs-2 fw-bold">
            SUCCESS IS THE MAXIMUM ABILITY TO UTILIZE THAT YOU HAVE
          </h3>
          <Button
            className="bg-warning px-2 text-black fs-3 fw-bold"
            onClick={() => handelClick()}
          >
            EXPLORE ALL
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-image"
          src="./image/slider3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="mb-4">
          <h3 className="bg-warning p-2 text-black fs-2 fw-bold">
            Success is where preparation and opportunity meet
          </h3>
          <p>
            It's time to dress up right. It's time to raise the curtain on the
            Muppet Show to night. Here's the story of a lovely lady who was
            three very lovely.
          </p>
          <Button
            className="bg-warning px-2 text-black fs-3 fw-bold"
            onClick={() => handelClick()}
          >
            EXPLORE ALL
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
// render(<ControlledCarousel />);

export default Banner;
