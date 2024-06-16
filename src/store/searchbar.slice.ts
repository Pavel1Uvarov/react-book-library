import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISearchBarState {
  filterByAuthor: string;
  filterByTitle: string;
  showOnlyFavorites: boolean;
}

const initialState: ISearchBarState = {
  filterByAuthor: '',
  filterByTitle: '',
  showOnlyFavorites: false,
}

export enum SearchBarFields {
  filterByAuthor = 'filterByAuthor',
  filterByTitle = 'filterByTitle',
  showOnlyFavorites = 'showOnlyFavorites',
}

export const filterByAuthorField = 'filterByAuthor'
export const filterByTitle = 'filterByTitle'
export const showOnlyFavorites = 'showOnlyFavorites'

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ fieldName: string, value: string | boolean }>) => {
      if (action.payload.fieldName === SearchBarFields.filterByAuthor && typeof action.payload.value === 'string') {
        state.filterByAuthor = action.payload.value;
      } 

      if (action.payload.fieldName === SearchBarFields.filterByTitle && typeof action.payload.value === 'string') {
        state.filterByTitle = action.payload.value;
      }

      if (action.payload.fieldName === SearchBarFields.showOnlyFavorites && typeof action.payload.value === 'boolean') {
        state.showOnlyFavorites = action.payload.value;
      }
    },
    resetStore: (state) => state = initialState
  }
})

export default searchBarSlice.reducer
export const searchBarActions = searchBarSlice.actions