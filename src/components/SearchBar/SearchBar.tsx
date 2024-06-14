import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <div className="grid grid-cols-4 gap-10 border-b py-2 items-center">
      <Input type="text" placeholder="Filter by author" className="w-52" />
      <Input type="text" placeholder="Filter by title" className="w-52" />
      <div className="items-center flex">
        <Checkbox id="onlyFavorite" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="onlyFavorite"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
          >
            Show only favorite
          </label>
        </div>
      </div>
      <Button>Reset filters</Button>
    </div>
  );
};

export default SearchBar;
