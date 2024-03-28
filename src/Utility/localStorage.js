import "react-toastify/dist/ReactToastify.css";
import toast from "react-hot-toast";

export const getBooks = () => {
  
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};
export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b === book);
  if (isExist) {
    return toast.error("Its already been added. This Book can not be added to the list again",{
      position: "top-right",
    });
    
    
  }
  
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("You have read the book Successfully!",
  {
    position: "top-right",
  });
};

export const getWishList = () => {
  
  const storedWishLists = localStorage.getItem("wishLists");
  if (storedWishLists) {
    return  JSON.parse(storedWishLists);
  }
  return [];
};

export const saveWhishList = (book) => {
  let wishLists = getWishList();
  let books = getBooks();

  const isExistInWishList = wishLists.find((b) => b === book);
  const isExistInBooks = books.find((b) => b === book);

  if (isExistInBooks) {
    return toast.error("Already Added in read!",
    {
      position: "top-right",
    });
  }

  if (isExistInWishList) {
    return toast.error("You already have added in Wishlist!",
    {
      position: "top-right",
    });
  }

  wishLists.push(book);
  localStorage.setItem("wishLists", JSON.stringify(wishLists));
  toast.success("Book Added to Wishlist Successfully!",
  {
    position: "top-right",
  });
};
