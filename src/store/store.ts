import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "./books.slice";
import { searchBarSlice } from "./searchbar.slice";
import { saveState } from "./Storage";

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    searchBar: searchBarSlice.reducer,
  }
})

store.subscribe(() => {
  saveState({books: store.getState().books.books}, 'books');
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch