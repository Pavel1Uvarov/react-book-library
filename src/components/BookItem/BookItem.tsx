import { BookmarkFilledIcon, BookmarkIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { IBook } from "@/types/book.interface";

const BookItem = ({
  handleRemoveBook,
  handleToggleFavoriteBook,
  book,
}: {
  handleRemoveBook: (uuid: string) => void;
  handleToggleFavoriteBook: (uuid: string) => void;
  book: IBook;
}) => {
  return (
    <div className="flex gap-4 justify-between items-center border-b py-1">
      <div className="flex">
        <p>
          {book.title} <b>{book.author}</b>
        </p>
        <Badge className="ml-2">{book.type}</Badge>
      </div>
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => handleToggleFavoriteBook(book.uuid)}
        >
          {book.isFavorite ? <BookmarkFilledIcon /> : <BookmarkIcon />}
        </Button>
        <Button
          variant="destructive"
          onClick={() => handleRemoveBook(book.uuid)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
