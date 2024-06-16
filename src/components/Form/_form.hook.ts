import { booksActions } from "@/store/books.slice";
import { AppDispatch } from "@/store/store";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useBookForm = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = useCallback((type = "manual") => {
    dispatch(
      booksActions.addNewBook({ title: title, author: author, type: type })
    );
    setTitle("");
    setAuthor("");
  }, [title, author]);
  
  return {
    title,
    author,
    handleSubmit,
    setTitle,
    setAuthor
  }
}