import BookList from "./components/BookList/BookList";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-4 py-4">
        <div className="grid grid-cols-6 gap-10">
          <div className="col-span-2">
            <Form />
          </div>
          <div className="col-span-4 border bg-white shadow-md p-4 rounded-md flex flex-col gap-4">
            <SearchBar />
            <h2 className="text-center font-bold">Book list</h2>
            <BookList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
