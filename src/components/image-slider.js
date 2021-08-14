import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Carousel} from 'react-bootstrap';
import im from "./image-slider.module.css";


const Imageslider = () =>{
   
    return(
        <div className="image">
        <Carousel className={im.main}>
  <Carousel.Item className={im.fun}>
    <img
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/13189.jpg"
      alt="First slide"
      width="100%"
      height="600px"
    />
    <Carousel.Caption>
      <h3>By S.Sooraj chakravarthy</h3>
      <p>Change the world by being yourself</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={im.fun}>
    <img
     className="d-block w-100"
      src="https://wallpapercave.com/wp/wp2587127.jpg"
      alt="First slide"
      width="100%"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Alena</h3>
      <p>The greatest glory in living lies not in never falling, but in rising every time we fall</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={im.fun}>
    <img
      className="d-block w-100"
      src="https://cutewallpaper.org/21/wallpaper-hd-downlod/hd-wallpapers-1080p-widescreen-nature-free-download-HD-.jpg"
      alt="First slide"
      width="100%"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Sooraj</h3>
      <p>Sooraj is mordern, beautiful and fun.</p>
    </Carousel.Caption>
  </Carousel.Item>

    <Carousel.Item className={im.fun}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      alt="First slide"
      width="100%"
      height="600px"
    />

    <Carousel.Caption>
      <h3>ME</h3>
      <p>My Proffesion is to do codeing</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Imageslider;