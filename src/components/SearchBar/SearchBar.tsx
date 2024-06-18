import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { useSearchBar } from "./_searchbar.hook";

const SearchBar = () => {
  const {
    byAuthor,
    byTitle,
    showOnlyFavorites,
    handleFieldUpdate,
    handleToggleFavoriteBooks,
    handleResetFilters,
  } = useSearchBar();

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
