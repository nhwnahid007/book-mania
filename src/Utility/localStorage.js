import "react-toastify/dist/ReactToastify.css";
import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};
export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.id === book.id);
  if (isExist) {
    return toast.error("Already Bookmarked!");
    
  }
  
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("book Bookmarked Successfully!");
};

export const getWishList = () => {
  let wishLists = [];
  const storedWishLists = localStorage.getItem("wishLists");
  if (storedWishLists) {
    wishLists = JSON.parse(storedWishLists);
  }
  return wishLists;
};

export const saveWhishList = (book) => {
  let wishLists = getWishList();
  let books = getBooks();

  const isExistInWishList = wishLists.find((b) => b.id === book.id);
  const isExistInBooks = books.find((b) => b.id === book.id);

  if (isExistInBooks) {
    return toast.error("Already Bookmarked!");
  }

  if (isExistInWishList) {
    return toast.error("Already in Wishlist!");
  }

  wishLists.push(book);
  localStorage.setItem("wishLists", JSON.stringify(wishLists));
  toast.success("Book Added to Wishlist Successfully!");
};
