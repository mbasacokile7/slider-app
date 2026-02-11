// Import the different data lists
import { useState } from "react";
import { shortList, list, longList } from "../data";
import { FaQuoteRight, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
function Carousel() {
  //Set up State variable
  const [people, setPeople] = useState(shortList);

  return (
    <section className="slider-container">
      {people.map((person) => {
        const { id, image, name, title, quote } = person;
        return (
          <article className="slide" key={id}>
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev">
        <FiChevronLeft />
      </button>
      <button type="button" className="next">
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;
