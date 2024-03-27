import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../../Utility/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);
  const {
    bookName,
    image,
    review,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  console.log(book, id);
  console.log(book.id)
  return (
    <div className="hero min-h-[720px] ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className=" rounded-lg  lg:h-[560px] " />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-6">By: {author}</p>
          <hr className="border-t border-2 border-gray-200 my-1" />
          <p>{category}</p>
          <hr className="border-t border-2 border-gray-200 my-1" />
          <p className="font-work">
            <span className="font-bold">Review:</span> {review}{" "}
          </p>
          <div className="flex gap-5 text-xl">
            <p className="font-bold ">Tags </p>
            <p className="text-green-500 font-semibold"># {tags[0]}</p>
            <p className="text-green-500 font-semibold "># {tags[1]}</p>
          </div>
          <hr className="border-t border-2 border-gray-200 my-1" />
          <div className="flex">
            <p className="flex-1 ">Number of pages: </p>
            <p className="flex-1 font-bold">{totalPages}</p>
          </div>
          <div className="flex ">
            <p className="flex-1 ">Publisher: </p>
            <p className="flex-1 font-bold">{publisher}</p>
          </div>
          <div className="flex">
            <p className="flex-1 ">Year of publishing: </p>
            <p className="flex-1 font-bold">{yearOfPublishing}</p>
          </div>
          <div className="flex">
            <p className=" flex-1">Rating: </p>
            <p className="flex-1 font-bold">{rating}</p>
          </div>
          <div className="flex mt-5 justify-start gap-5">
            <button onClick={()=>saveBook(book.id)} className="btn">Read</button>
            <button className="btn bg-info">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
