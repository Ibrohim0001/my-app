import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"


 
const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://cwexplorationphotography.com/wp-content/uploads/galleries/post-1540/thumbnails/10896225_528254790650735_6470305242078852429_o.jpg"
    alt="image "
  />
);

const Title = () => <h2>Book Title</h2>;

const Author = () => {
  return <h4>image placeholder</h4>;
};







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
