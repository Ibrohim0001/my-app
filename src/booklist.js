import { booksData } from "./booksData";
import { Book } from "./information";

export const BookList = () => {
    return (
      <section className="booklist">
        {booksData.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    );
  };
  