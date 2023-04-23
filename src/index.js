import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author="Patrick Rothuss"
        names="The Name of Wind"
        photo="./Images/image1.jpg"
      >
        <p>THis boo kis one of the most expensive books in the wolrd</p>
        <button>Buy now</button>
        </Book>
      <Book
        author="WALTER Thirring"
        names="Code Name God"
        photo="./Images/image2.jpg"
      />
      <Book
        author="Shannon W.Lueld"
        names="Another Side Of The Moon"
        photo="./Images/image3.jpg"
      />
    </section>
  );
};

const photo = "./Images/image1.jpg";
const names = "Wellcome to book shop";
const author = "how are man";
const title = "it is photo";

const Book = ({ title, names, photo, author, children }) => {
  return (
    <article className="book">
      <img src={photo} alt={title} />
      <h2>{names}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
