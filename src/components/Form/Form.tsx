import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Form = () => {
  return (
    <div className="border rounded-md p-4 flex flex-col gap-4 bg-white shadow-md">
      <h2 className="text-center font-bold">Add a New Book</h2>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" type="text" placeholder="Enter book title" />
      </div>
      <div>
        <Label htmlFor="author">Author</Label>
        <Input id="author" type="text" placeholder="Enter book author" />
      </div>
      <Button className="w-full">Add Book</Button>
      <div className="flex gap-4">
        <Button className="w-1/2" variant="outline">
          Add Random Book
        </Button>
        <Button className="w-1/2" variant="outline">
          Add Random Book via API
        </Button>
      </div>
    </div>
  );
};

export default Form;
