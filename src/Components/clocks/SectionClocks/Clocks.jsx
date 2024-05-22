import { useState } from "react";
import "./Clocks.css"

const Clocks = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    const totalSlides = document.querySelectorAll('.items-clock').length;
    let nextSlide = (currentSlide + 1) % totalSlides;

    const slides = document.querySelectorAll('.items-clock');
    slides[currentSlide].classList.remove('active-clock');
    slides[nextSlide].classList.add('active-clock');

    setCurrentSlide(nextSlide);
  };

  const handlePrevClick = () => {
    const totalSlides = document.querySelectorAll('.items-clock').length;
    let prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;

    const slides = document.querySelectorAll('.items-clock');
    slides[currentSlide].classList.remove('active-clock');
    slides[prevSlide].classList.add('active-clock');

    setCurrentSlide(prevSlide);
  };


  return (
    <section className="container-shoes">
      <button id="prev" onClick={handlePrevClick}><img src="./arrow.png" alt="" /></button>
      <div className="items-clock active-clock">
        <div className="img-shoes">
          <img src="./clock2.png" alt="" />
        </div>
        <div className="content">
          <h2>HAYLOU Smart Watch RT3</h2>
          <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror <br /> voluptates  maxime explicabo praesentium aperiam.
          </p>
          <button className="infos">Saiba Mais</button>
        </div>
      </div>

      <div className="items-clock ">
        <div className="img-shoes">
          <img src="./clock3.png" alt="" />
        </div>
        <div className="content">
          <h2>HAYLOU RS5 Smartwatch</h2>
          <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror <br /> voluptates  maxime explicabo praesentium aperiam.
          </p>
          <button className="infos">Saiba Mais</button>
        </div>
      </div>

      <div className="items-clock">
        <div className="img-shoes">
          <img src="./clock4.png" alt="" />
        </div>
        <div className="content">
          <h2>HAYLOU R8 Smartwatch</h2>
          <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror <br /> voluptates  maxime explicabo praesentium aperiam.
          </p>
          <button className="infos">Saiba Mais</button>
        </div>
      </div>

      <button id="next" onClick={handleNextClick}><img src="./arrow.png" alt="" /></button>
    </section>
  );
}

export default Clocks;
