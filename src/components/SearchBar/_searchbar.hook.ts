import { SearchBarFields, searchBarActions } from "@/store/searchbar.slice";
import { AppDispatch } from "@/store/store";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useSearchBar = () => {
  const [byAuthor, setByAuthor] = useState<string>("");
  const [byTitle, setByTitle] = useState<string>("");
  const [showOnlyFavorites, setShowOnlyFavorites] =
    useState<CheckedState>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = useCallback((
    fieldName: SearchBarFields,
    value: string | boolean
  ) => {
    dispatch(
      searchBarActions.updateField({ fieldName: fieldName, value: value })
    );
  }, []);

  const handleFieldUpdate = useCallback((fieldName: string, value: string) => {
    if (fieldName === "byTitle") {
      setByTitle(value);
      handleSearch(SearchBarFields.filterByTitle, value);
    }
    if (fieldName === "byAuthor") {
      setByAuthor(value);
      handleSearch(SearchBarFields.filterByAuthor, value);
    }
  }, [byAuthor, byTitle]);

  const handleToggleFavoriteBooks = useCallback((value: CheckedState) => {
    setShowOnlyFavorites(value);
    handleSearch(SearchBarFields.showOnlyFavorites, value);
  }, [showOnlyFavorites]);

  const handleResetFilters = useCallback(() => {
    setByAuthor("");
    setByTitle("");
    dispatch(searchBarActions.resetStore());
  },[]);

  return {
    byAuthor,
    byTitle,
    showOnlyFavorites,
    handleToggleFavoriteBooks,
    handleResetFilters,
    handleFieldUpdate
  }
}