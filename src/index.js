import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
 
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
  const title = 'Wellcome to book shop'
  return (
    <article className="book">
    <img
     src="./Images/image1.jpg" alt="image " 
     />
     <h2>{title}</h2>
     <h4>image placeholder</h4>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
