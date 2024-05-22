import { useState } from "react";
import "./notebook.css"

const NoteBook = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    const totalSlides = document.querySelectorAll('.items-note').length;
    let nextSlide = (currentSlide + 1) % totalSlides;

    const slides = document.querySelectorAll('.items-note');
    slides[currentSlide].classList.remove('active-note');
    slides[nextSlide].classList.add('active-note');

    setCurrentSlide(nextSlide);
  };

  const handlePrevClick = () => {
    const totalSlides = document.querySelectorAll('.items-note').length;
    let prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;

    const slides = document.querySelectorAll('.items-note');
    slides[currentSlide].classList.remove('active-note');
    slides[prevSlide].classList.add('active-note');

    setCurrentSlide(prevSlide);
  };


  return (
    <section className="container-shoes">
      <button id="prev" onClick={handlePrevClick}><img src="./arrow.png" alt="" /></button>
      <div className="items-note active-note">
        <div className="img-shoes">
          <img src="./note1.png" alt="" />
        </div>
        <div className="content">
          <h2>Acer Nitro 5</h2>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror <br /> voluptates  maxime explicabo praesentium aperiam.
          </p>
          <button className="infos">Saiba Mais</button>
        </div>
      </div>

      <div className="items-note ">
        <div className="img-shoes">
          <img src="./note2.png" alt="" />
        </div>
        <div className="content">
          <h2>MacBook iOS</h2>
          <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nemo impedit consequatur sit numquam, alias ea minus  <br /> rem mollitia libero tenetur id voluptate excepturi  berror <br /> voluptates  maxime explicabo praesentium aperiam.
          </p>
          <button className="infos">Saiba Mais</button>
        </div>
      </div>

      <div className="items-note">
        <div className="img-shoes">
          <img src="./note3.png" alt="" />
        </div>
        <div className="content">
          <h2>Galaxy book 2</h2>
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

export default NoteBook;
