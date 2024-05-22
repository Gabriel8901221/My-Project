import { useState } from "react";
import "./shoes.css"

const Shoes = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    const totalSlides = document.querySelectorAll('.items-container').length;
    let nextSlide = (currentSlide + 1) % totalSlides;
    
    const slides = document.querySelectorAll('.items-container');
    slides[currentSlide].classList.remove('active');
    slides[nextSlide].classList.add('active');
    
    setCurrentSlide(nextSlide);
  };

  const handlePrevClick = () => {
    const totalSlides = document.querySelectorAll('.items-container').length;
    let prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    
    const slides = document.querySelectorAll('.items-container');
    slides[currentSlide].classList.remove('active');
    slides[prevSlide].classList.add('active');
    
    setCurrentSlide(prevSlide);
    };


    return (
      <section className="container-shoes">
        <button id="prev" onClick={handlePrevClick}><img src="./arrow.png" alt="" /></button>
        <div className="items-container active" >
          <div className="img-shoes">
            <img src="./shoe1.png" alt="" />
          </div>
          <div className="content">
            <h2>Nike air Max SYSTM</h2>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror assumenda voluptates  maxime explicabo praesentium.
            </p>
            <button className="infos">Saiba Mais</button>
          </div>
        </div>

        <div className="items-container ">
          <div className="img-shoes">
            <img src="./shoe2.png" alt="" />
          </div>
          <div className="content">
            <h2>Nike MC Trainer 2</h2>
            <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror assumenda voluptates  maxime explicabo praesentium.
            </p>
            <button className="infos">Saiba Mais</button>
          </div>
        </div>

        <div className="items-container ">
          <div className="img-shoes">
            <img src="./shoe3.png" alt="" />
          </div>
          <div className="content">
            <h2>Air Jordan Legacy 312</h2>
            <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror assumenda voluptates  maxime explicabo praesentium.
            </p>
            <button className="infos">Saiba Mais</button>
          </div>
        </div>

        <div className="items-container">
          <div className="img-shoes">
            <img src="./shoe4.png" alt="" />
          </div>
          <div className="content">
            <h2>Jordan Delta 3 Low</h2>
            <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror assumenda voluptates  maxime explicabo praesentium.
            </p>
            <button className="infos">Saiba Mais</button>
          </div>
        </div>

        <button id="next" onClick={handleNextClick}><img src="./arrow.png" alt="" /></button>
      </section>
    );
  }

  export default Shoes;
