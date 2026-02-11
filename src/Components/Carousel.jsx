// Import the different data lists
import { useState } from "react";
import { shortList, list, longList } from "../data";
import { FaQuoteRight, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
function Carousel() {
  //Set up State variable
  const [people, setPeople] = useState(list);

  // Set up a currentPerson state value to move through the carousel
  const [currentPerson, setCurrentPerson] = useState(2);
  // Functions for sliding through the carousel

  // Previous slide
  function prevSlide() {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  }

  // Previous slide
  function nextSlide() {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  }

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;
