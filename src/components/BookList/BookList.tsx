import BookItem from "../BookItem/BookItem";
import { useBookList } from "./_bookList.hook";

const BookList = () => {
  const { sortedBooks, handleRemoveBook, handleToggleFavoriteBook } =
    useBookList();
  return (
    <>
      <ul className="list-decimal px-4">
        {sortedBooks.map((book) => (
          <li key={book.uuid}>
            <BookItem
              book={book}
              handleRemoveBook={handleRemoveBook}
              handleToggleFavoriteBook={handleToggleFavoriteBook}
            />
          </li>
        ))}
      </ul>
      {sortedBooks.length === 0 && (
        <p className="text-center font-bold border py-2 rounded-md bg-gray-50">
          No Books yet...
        </p>
      )}
    </>
  );
};

export default BookList;
