import { IBook } from "@/types/book.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./Storage";

export interface IBooksState {
  books: IBook[];
}

const initialState: IBooksState = {
  books: loadState<{books: IBook[]}>('books')?.books ?? []
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addNewBook: (state, action: PayloadAction<Pick<IBook, 'title' | 'author' | 'type'>>) => {
      state.books.push({
        uuid: self.crypto.randomUUID(),
        title: action.payload.title,
        author: action.payload.author,
        type: action.payload.type,
        isFavorite: false
      })
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter(book => book.uuid!== action.payload)
    },
    setBookFavorite: (state, action: PayloadAction<{uuid: string}>) => {
      state.books = state.books.map(book => book.uuid === action.payload.uuid ? {...book, isFavorite:!book.isFavorite} : book)
    }
  }
})

export default booksSlice.reducer
export const booksActions = booksSlice.actions