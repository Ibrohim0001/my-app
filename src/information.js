export const Book = ({ names, photo, author }) => {
  
    return (
      <article className="book">
        <img src={photo} alt ={names}/>
        <h2>{names}</h2>
        <h4>{author}</h4>
      </article>
    );
  };
  