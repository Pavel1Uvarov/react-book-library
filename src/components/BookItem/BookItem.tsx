import { BookmarkIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const BookItem = () => {
  return (
    <div className="flex gap-4 justify-between items-center border-b py-1">
      <p>
        Test tst <b>Author</b>
        <Badge className="ml-2">Title</Badge>
      </p>
      <div className="flex gap-4">
        <Button variant="outline">
          <BookmarkIcon />
        </Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
};

export default BookItem;
