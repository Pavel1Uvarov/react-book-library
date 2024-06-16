import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { SearchBarFields, searchBarActions } from "@/store/searchbar.slice";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { CheckedState } from "@radix-ui/react-checkbox";

const SearchBar = () => {
  const [byAuthor, setByAuthor] = useState<string>("");
  const [byTitle, setByTitle] = useState<string>("");
  const [showOnlyFavorites, setShowOnlyFavorites] =
    useState<CheckedState>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (
    fieldName: SearchBarFields,
    value: string | boolean
  ) => {
    dispatch(
      searchBarActions.updateField({ fieldName: fieldName, value: value })
    );
  };

  const handleFieldUpdate = (fieldName: string, value: string) => {
    if (fieldName === "byTitle") {
      setByTitle(value);
      handleSearch(SearchBarFields.filterByTitle, value);
    }
    if (fieldName === "byAuthor") {
      setByAuthor(value);
      handleSearch(SearchBarFields.filterByAuthor, value);
    }
  };

  const handleToggleFavoriteBooks = (value: CheckedState) => {
    setShowOnlyFavorites(value);
    handleSearch(SearchBarFields.showOnlyFavorites, value);
  };

  const handleResetFilters = () => {
    setByAuthor("");
    setByTitle("");
    dispatch(searchBarActions.resetStore());
  };

  return (
    <div className="grid grid-cols-4 gap-10 border-b py-2 items-center">
      <Input
        type="text"
        placeholder="Filter by author"
        className="w-52"
        value={byAuthor}
        onChange={(e) => handleFieldUpdate("byAuthor", e.target.value)}
      />
      <Input
        type="text"
        placeholder="Filter by title"
        className="w-52"
        value={byTitle}
        onChange={(e) => handleFieldUpdate("byTitle", e.target.value)}
      />
      <div className="items-center flex">
        <Checkbox
          id="onlyFavorite"
          checked={showOnlyFavorites}
          onCheckedChange={(checked) => handleToggleFavoriteBooks(checked)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="onlyFavorite"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
          >
            Show only favorite
          </label>
        </div>
      </div>
      <Button onClick={() => handleResetFilters()}>Reset filters</Button>
    </div>
  );
};

export default SearchBar;
