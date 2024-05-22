import { useState } from "react";
import "./sectionCell.css"

const Cell = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    const totalSlides = document.querySelectorAll('.items-cell').length;
    let nextSlide = (currentSlide + 1) % totalSlides;

    const slides = document.querySelectorAll('.items-cell');
    slides[currentSlide].classList.remove('active-cell');
    slides[nextSlide].classList.add('active-cell');

    setCurrentSlide(nextSlide);
  };

  const handlePrevClick = () => {
    const totalSlides = document.querySelectorAll('.items-cell').length;
    let prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;

    const slides = document.querySelectorAll('.items-cell');
    slides[currentSlide].classList.remove('active-cell');
    slides[prevSlide].classList.add('active-cell');

    setCurrentSlide(prevSlide);
  };


  return (
    <section className="container-shoes">
      <button id="prev" onClick={handlePrevClick}><img src="./arrow.png" alt="" /></button>
      <div className="items-cell active-cell">
        <div className="img-shoes">
          <img src="./cell1.png" alt="" />
        </div>
        <div className="content">
          <h2>S24 Ultra</h2>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror <br /> voluptates  maxime explicabo praesentium aperiam.
          </p>
          <button className="infos">Saiba Mais</button>
        </div>
      </div>

      <div className="items-cell ">
        <div className="img-shoes">
          <img src="./cell2.png" alt="" />
        </div>
        <div className="content">
          <h2>iPhone 13</h2>
          <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror <br /> voluptates  maxime explicabo praesentium aperiam.
          </p>
          <button className="infos">Saiba Mais</button>
        </div>
      </div>

      <div className="items-cell">
        <div className="img-shoes">
          <img src="./cell3.png" alt="" />
        </div>
        <div className="content">
          <h2>A54 5G</h2>
          <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror <br /> voluptates  maxime explicabo praesentium aperiam.
          </p>
          <button className="infos">Saiba Mais</button>
        </div>
      </div>

      <div className="items-cell">
        <div className="img-shoes">
          <img src="./cell4.png" alt="" />
        </div>
        <div className="content">
          <h2>Poco F5</h2>
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

export default Cell;
