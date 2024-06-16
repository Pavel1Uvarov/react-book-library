import { booksActions } from "@/store/books.slice";
import { RootState, AppDispatch } from "@/store/store";
import { IBook } from "@/types/book.interface";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useBookList = () => {
  const books = useSelector((s: RootState) => s.books.books);
  const [sortedBooks, setSortedBooks] = useState<IBook[]>([]);
  const { filterByAuthor, filterByTitle, showOnlyFavorites } = useSelector((s: RootState) => s.searchBar);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveBook = useCallback((uuid: string) => {
    dispatch(booksActions.removeBook(uuid));
  }, []);

  const handleToggleFavoriteBook = useCallback((uuid: string) => {
    dispatch(booksActions.setBookFavorite({ uuid: uuid }));
  }, []);

  useEffect(() => {
    setSortedBooks(books.filter(book => {
      if (showOnlyFavorites) {
        return book.isFavorite && book.title.toLowerCase().includes(filterByTitle.toLowerCase()) && book.author.toLowerCase().includes(filterByAuthor.toLowerCase())
      }
      return book.title.toLowerCase().includes(filterByTitle.toLowerCase()) && book.author.toLowerCase().includes(filterByAuthor.toLowerCase())
    }))
  }, [filterByAuthor, filterByTitle, showOnlyFavorites, books])

  
  return {
    books,
    sortedBooks,
    handleRemoveBook,
    handleToggleFavoriteBook
  }
}