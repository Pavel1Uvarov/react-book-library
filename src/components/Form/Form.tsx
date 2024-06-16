import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useBookForm } from "./_form.hook";

const Form = () => {
  const { title, setTitle, author, setAuthor, handleSubmit } = useBookForm();

  return (
    <div className="border rounded-md p-4 flex flex-col gap-4 bg-white shadow-md">
      <h2 className="text-center font-bold">Add a New Book</h2>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          type="text"
          placeholder="Enter book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <Button className="w-full" onClick={() => handleSubmit("manual")}>
        Add Book
      </Button>
      <Button className="w-full" variant="outline">
        Add Random Book via API
      </Button>
    </div>
  );
};

export default Form;
